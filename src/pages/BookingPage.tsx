import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalendarDays, Clock, ChevronRight, ArrowLeft, Phone, CheckCircle2, Stethoscope } from 'lucide-react'
import { supabase } from '../lib/supabase'

const timeSlots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00']
const consultationTypes = ['Consultation post-opératoire', 'Contrôle de cicatrisation', 'Bilan de récupération', 'Urgence / Douleur', 'Première consultation', 'Autre motif']

export default function BookingPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const nextStep = () => { if (step < 3) setStep(s => s + 1) }
  const prevStep = () => { if (step > 0) setStep(s => s - 1) }

  const canProceed = () => {
    switch (step) {
      case 0: return name.trim().length >= 2 && phone.trim().length >= 8
      case 1: return selectedType !== ''
      case 2: return selectedDate !== '' && selectedTime !== ''
      default: return true
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      const { error } = await supabase.from('appointments').insert({
        title: selectedType,
        date_time: `${selectedDate} ${selectedTime}`,
        doctor_name: 'Dr Ifri',
        notes: `Patient: ${name}, Tél: ${phone}${notes ? `. ${notes}` : ''}`,
        patient_phone: phone,
        status: 'Scheduled',
        qr_code_content: `SURGICARE-APT-${Date.now()}`,
      })
      if (error) throw error
      setDone(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Impossible d'enregistrer le rendez-vous, veuillez réessayer.")
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <CheckCircle2 className="mx-auto text-green-500" size={64} />
            <h2 className="text-2xl font-bold mt-4 text-gray-900">Rendez-vous confirmé !</h2>
            <p className="text-gray-600 mt-2">Votre rendez-vous du {selectedDate} à {selectedTime} chez le Dr IFRI a été enregistré.</p>
            <p className="text-sm text-gray-500 mt-4">{name} — {phone}</p>
            <button onClick={() => navigate('/')} className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-bold hover:bg-blue-700 transition">
              <ArrowLeft size={18} /> Retour à l'accueil
            </button>
            <a href="tel:0778603827" className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm justify-center w-full">
              <Phone size={16} /> 0778 60 38 27
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-lg mx-auto px-4 py-8">
        <button onClick={() => step === 0 ? navigate('/') : prevStep()} className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 mb-6">
          <ArrowLeft size={18} /> {step === 0 ? 'Retour' : 'Étape précédente'}
        </button>

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className="text-blue-600" size={28} />
            <h1 className="text-2xl font-bold text-gray-900">Prendre rendez-vous</h1>
          </div>

          <div className="flex gap-2 mb-8">
            {['Infos', 'Motif', 'Créneau'].map((label, i) => (
              <div key={label} className="flex-1">
                <div className={`h-2 rounded-full transition-colors ${i <= step ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <p className={`text-xs font-semibold mt-1 text-center ${i <= step ? 'text-blue-600' : 'text-gray-400'}`}>{label}</p>
              </div>
            ))}
          </div>

          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-lg font-bold text-gray-800">Vos informations</h2>
              <label className="grid gap-1.5 text-sm font-semibold text-gray-700">
                Nom complet
                <input value={name} onChange={e => setName(e.target.value)} className="rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="Votre nom" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold text-gray-700">
                Téléphone
                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" className="rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="Ex. 0778 60 38 27" />
              </label>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-gray-800">Motif de la consultation</h2>
              {consultationTypes.map(type => (
                <button key={type} onClick={() => { setSelectedType(type); nextStep() }} className={`w-full text-left rounded-xl border p-4 transition font-medium ${selectedType === type ? 'border-blue-600 bg-blue-50 text-blue-800' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'}`}>
                  {type}
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-lg font-bold text-gray-800">Choisissez un créneau</h2>
              <label className="grid gap-1.5 text-sm font-semibold text-gray-700">
                <CalendarDays size={18} className="inline" /> Date
                <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
              </label>
              {selectedDate && (
                <>
                  <p className="text-sm font-semibold text-gray-700 flex items-center gap-2"><Clock size={18} /> Horaire disponible</p>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map(time => {
                      const hour = parseInt(time.split(':')[0])
                      const available = (hour >= 8 && hour <= 12) || (hour >= 14 && hour <= 16)
                      if (!available) return null
                      return (
                        <button key={time} onClick={() => setSelectedTime(time)} className={`px-4 py-2 rounded-xl border text-sm font-semibold transition ${selectedTime === time ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'}`}>
                          {time}
                        </button>
                      )
                    })}
                  </div>
                  <label className="grid gap-1.5 text-sm font-semibold text-gray-700 mt-4">
                    Notes (optionnel)
                    <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="Précisions utiles..." />
                  </label>
                </>
              )}
            </div>
          )}

          <div className="mt-6">
            {error && <p className="mb-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">{error}</p>}
            {step < 2 ? (
              <button onClick={nextStep} disabled={!canProceed()} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg disabled:opacity-40 hover:bg-blue-700 transition">
                Continuer <ChevronRight size={20} />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={!canProceed() || loading} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 font-bold text-white shadow-lg disabled:opacity-40 hover:bg-green-700 transition">
                {loading ? 'Confirmation...' : 'Confirmer le rendez-vous'}
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Les rendez-vous sont soumis à la confirmation du cabinet. En cas d'urgence, appelez le 0778 60 38 27.
        </p>
      </div>
    </div>
  )
}
