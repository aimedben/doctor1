import { useEffect } from 'react'

const CHAT_STYLE_URL = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css'
const CHAT_BUNDLE_URL = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js'

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://aimed15.app.n8n.cloud/webhook/2c7d7536-4df7-4ce2-92ed-50d21f200944/webhook'

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
