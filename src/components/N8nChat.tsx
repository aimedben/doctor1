import { useEffect } from 'react'

const CHAT_STYLE_URL = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css'
const CHAT_BUNDLE_URL = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://cgorbzmwsualnhqhftnv.supabase.co'
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnb3Jiem13c3VhbG5ocWhmdG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5ODAzNzQsImV4cCI6MjEwMDU1NjM3NH0.ZDBOt-ymdsyB8GSxHgemSrCm89FN-p1sesSqtMvReEM'

const WEBHOOK_URL = `${SUPABASE_URL}/functions/v1/assistant`

declare global {
  interface Window {
    __n8nChatInjected?: boolean
  }
}

const N8nChat = () => {
  useEffect(() => {
    if (!WEBHOOK_URL || window.__n8nChatInjected) return
    window.__n8nChatInjected = true

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = CHAT_STYLE_URL
    document.head.appendChild(link)

    const bundleUrl = CHAT_BUNDLE_URL
    import(/* @vite-ignore */ bundleUrl)
      .then(({ createChat }: { createChat: (config: unknown) => void }) => {
        if (!window.__n8nChatInjected) return
        createChat({
          webhookUrl: WEBHOOK_URL,
          webhookConfig: {
            method: 'POST',
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          },
          mode: 'window',
          showWelcomeScreen: true,
          initialMessages: [
            'Bonjour ! Je suis l’assistant virtuel du Docteur IFRI. Comment puis-je vous aider aujourd’hui ?',
          ],
          i18n: {
            en: {
              title: 'Cabinet Dr IFRI',
              subtitle: 'Chirurgien Orthopédiste',
              inputPlaceholder: 'Écrivez votre message...',
            },
          },
        })
      })
      .catch(() => {
        window.__n8nChatInjected = false
      })
  }, [])

  return null
}

export default N8nChat
