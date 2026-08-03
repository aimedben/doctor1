import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalendarDays, Clock, CheckCircle2, XCircle, Trash2, LogOut, ArrowLeft, Phone, Stethoscope, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'
import type { Session } from '@supabase/supabase-js'

type Appointment = {
  id: number
  title: string
  date_time: string
  doctor_name: string
  notes: string
  status: 'Scheduled' | 'Completed' | 'Cancelled'
  created_at: string
  qr_code_content: string
}

export default function AdminPage() {
  const navigate = useNavigate()
  const [session, setSession] = useState<Session | null>(null)
  const [checking, setChecking] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const [appointments, setAppointments] = useState<Appointment[]>([])

  const load = async () => {
    try {
      const { data, error } = await supabase.from('appointments').select('*').order('date_time', { ascending: true })
      if (error) throw error
      setAppointments(data as Appointment[] || [])
    } catch { /* ignore */ }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setChecking(false)
      if (data.session) load()
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      if (nextSession) load()
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async () => {
    setLoginLoading(true)
    setLoginError('')
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
    if (error) {
      setLoginError(error.message)
    } else {
      setPassword('')
      setEmail('')
    }
    setLoginLoading(false)
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setAppointments([])
  }

  const today = new Date().toISOString().split('T')[0]
  const upcoming = appointments.filter(a => a.status === 'Scheduled' && a.date_time >= today)
  const past = appointments.filter(a => a.status !== 'Scheduled' || a.date_time < today)

  const handleStatus = async (id: number, status: 'Completed' | 'Cancelled') => {
    await supabase.from('appointments').update({ status }).eq('id', id)
    load()
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Supprimer ce rendez-vous ?')) return
    await supabase.from('appointments').delete().eq('id', id)
    load()
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400">Chargement...</p>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <Stethoscope className="mx-auto text-blue-600" size={48} />
            <h1 className="text-2xl font-bold mt-4 text-gray-900 text-center">Espace Dr IFRI</h1>
            <p className="text-sm text-gray-500 mt-1 text-center">Connexion pour gérer les rendez-vous</p>
            <label className="block mt-6 text-sm font-semibold text-gray-700">
              Email
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && login()}
                placeholder="admin@surgicare.dz"
                autoComplete="username"
                className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-blue-500"
              />
            </label>
            <label className="block mt-3 text-sm font-semibold text-gray-700">
              Mot de passe
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && login()}
                placeholder="••••••••"
                autoComplete="current-password"
                className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-blue-500"
              />
            </label>
            {loginError && (
              <p className="flex items-center gap-2 text-red-600 text-sm mt-3">
                <AlertCircle size={16} /> {loginError}
              </p>
            )}
            <button
              onClick={login}
              disabled={loginLoading || !email.trim() || !password}
              className="mt-5 w-full rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 transition disabled:opacity-40"
            >
              {loginLoading ? 'Connexion...' : 'Accéder'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Stethoscope className="text-blue-600" size={22} />
            <span className="font-bold text-gray-900">Dr IFRI — Admin</span>
          </div>
          <button onClick={logout} className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-600">
            <LogOut size={16} /> Quitter
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-4">
          <ArrowLeft size={16} /> Voir le site public
        </button>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Agenda des rendez-vous</h1>
          <span className="text-sm text-gray-500 bg-white rounded-full px-4 py-2 border">{appointments.length} total</span>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2"><CalendarDays size={20} /> À venir ({upcoming.length})</h2>
            {upcoming.length === 0 && <p className="text-sm text-gray-400 bg-white rounded-xl p-6 text-center">Aucun rendez-vous à venir</p>}
            <div className="space-y-3">
              {upcoming.map(a => {
                const [date, time] = a.date_time.split(' ')
                return (
                  <div key={a.id} className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-lg">{a.title}</p>
                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1"><CalendarDays size={14} /> {date}</span>
                          <span className="flex items-center gap-1"><Clock size={14} /> {time}</span>
                          <span className="flex items-center gap-1"><Phone size={14} /> {a.doctor_name}</span>
                        </div>
                        {a.notes && <p className="text-sm text-gray-500 mt-1 line-clamp-2">{a.notes}</p>}
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => handleStatus(a.id, 'Completed')} className="p-2 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 transition" title="Marquer terminé"><CheckCircle2 size={20} /></button>
                        <button onClick={() => handleStatus(a.id, 'Cancelled')} className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition" title="Annuler"><XCircle size={20} /></button>
                        <button onClick={() => handleDelete(a.id)} className="p-2 rounded-xl bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-600 transition" title="Supprimer"><Trash2 size={20} /></button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-500 mb-3 flex items-center gap-2">Passés / Annulés ({past.length})</h2>
            {past.length === 0 && <p className="text-sm text-gray-400 bg-white rounded-xl p-6 text-center">Aucun</p>}
            <div className="space-y-2">
              {past.map(a => {
                const [date, time] = a.date_time.split(' ')
                return (
                  <div key={a.id} className="bg-white rounded-xl border border-gray-200 p-4 opacity-70">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-700">{a.title}</p>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.status === 'Completed' ? 'bg-green-100 text-green-700' : a.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{a.status}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{date} {time}</p>
                      </div>
                      <button onClick={() => handleDelete(a.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition"><Trash2 size={16} /></button>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
