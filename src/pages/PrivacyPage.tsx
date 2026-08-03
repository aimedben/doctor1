import { Link } from 'react-router-dom'
import { ShieldCheck, Phone, MapPin, ArrowLeft, Stethoscope } from 'lucide-react'

const sections = [
  {
    title: '1. Responsable du traitement',
    content: [
      'Cabinet du Docteur IFRI',
      'Spécialité : Chirurgien Orthopédiste Traumatologue',
      'Adresse : Rond Point en Face de la Gare Routière, Seddouk, Béjaïa, Algérie',
      'Téléphone : 0778603827',
    ],
  },
  {
    title: '2. Données collectées',
    content: [
      'Lorsque vous utilisez notre assistant WhatsApp ou nos services numériques, nous pouvons collecter les informations suivantes :',
    ],
    list: [
      'Nom et prénom',
      'Numéro de téléphone',
      'Messages texte',
      'Messages vocaux',
      'Date et heure des échanges',
      'Informations relatives aux rendez-vous',
      'Motif de consultation communiqué volontairement',
      'Informations nécessaires à l\'organisation des consultations',
    ],
    contentAfter: ['Nous ne collectons que les informations strictement nécessaires au fonctionnement du service.'],
  },
  {
    title: '3. Utilisation des données',
    content: ['Les informations collectées sont utilisées uniquement pour :'],
    list: [
      'répondre à vos demandes ;',
      'organiser, modifier ou annuler vos rendez-vous ;',
      'vérifier les disponibilités du cabinet ;',
      'améliorer la qualité du service ;',
      'assurer le suivi des échanges avec les patients ;',
      'garantir la sécurité et le bon fonctionnement du système.',
    ],
  },
  {
    title: '4. Intelligence artificielle',
    content: [
      'Notre assistant utilise des technologies d\'intelligence artificielle afin d\'améliorer la qualité des réponses.',
      'Les messages vocaux peuvent être transcrits automatiquement afin de comprendre votre demande avant traitement.',
      'Ces traitements sont utilisés exclusivement pour répondre à votre demande et ne servent pas à prendre des décisions médicales.',
    ],
  },
  {
    title: '5. Services tiers utilisés',
    content: [
      'Afin d\'assurer le fonctionnement du service, certaines informations peuvent être traitées par des prestataires techniques, notamment :',
    ],
    list: [
      'WhatsApp Business Cloud API (Meta) pour la réception et l\'envoi des messages ;',
      'Google Calendar pour la gestion des rendez-vous ;',
      'Groq AI pour la transcription automatique des messages vocaux ;',
      'n8n pour l\'automatisation des traitements.',
    ],
    contentAfter: ['Ces prestataires traitent uniquement les données nécessaires à l\'exécution des services.'],
  },
  {
    title: '6. Confidentialité',
    content: [
      'Toutes les informations échangées avec le cabinet sont considérées comme confidentielles.',
      'Aucune donnée n\'est vendue, louée ou cédée à des fins commerciales.',
      'Seul le personnel autorisé du cabinet peut accéder aux informations nécessaires à la prise en charge administrative des patients.',
    ],
  },
  {
    title: '7. Conservation des données',
    content: [
      'Les données sont conservées uniquement pendant la durée nécessaire à la gestion des rendez-vous, au suivi administratif et au respect des obligations légales applicables.',
    ],
  },
  {
    title: '8. Sécurité',
    content: ['Nous mettons en œuvre des mesures techniques et organisationnelles destinées à protéger les informations contre :'],
    list: [
      'l\'accès non autorisé ;',
      'la perte ;',
      'la modification ;',
      'la divulgation ;',
      'la destruction accidentelle.',
    ],
    contentAfter: ['Malgré ces mesures, aucun système informatique ne peut garantir une sécurité absolue.'],
  },
  {
    title: '9. Vos droits',
    content: ['Vous pouvez à tout moment demander :'],
    list: [
      'l\'accès à vos données ;',
      'leur rectification ;',
      'leur suppression lorsque cela est possible ;',
      'la limitation de leur traitement ;',
      'des informations sur leur utilisation.',
    ],
    contentAfter: ['Pour exercer ces droits, contactez directement le cabinet.'],
  },
  {
    title: '10. Suppression des données',
    content: [
      'Vous pouvez demander la suppression de vos informations personnelles en contactant le cabinet :',
      'Téléphone : 0778603827',
      'Votre demande sera étudiée dans les meilleurs délais conformément aux obligations légales.',
    ],
  },
  {
    title: '11. Utilisation médicale',
    content: [
      'L\'assistant virtuel fournit uniquement des informations générales.',
      'Il ne remplace jamais une consultation médicale.',
      'En cas d\'urgence médicale, contactez immédiatement les services d\'urgence ou rendez-vous dans le service d\'urgence le plus proche.',
    ],
  },
  {
    title: '12. Modifications',
    content: [
      'Cette politique de confidentialité peut être modifiée afin de refléter les évolutions du service ou des obligations légales.',
      'La date de dernière mise à jour sera indiquée en haut de cette page.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 mb-8">
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">Politique de confidentialité</h1>
              <p className="text-sm text-gray-500 mt-1">Dernière mise à jour : 03 août 2026</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            Bienvenue sur la politique de confidentialité du <strong>Cabinet du Docteur IFRI</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Nous accordons une grande importance à la protection de vos données personnelles et nous nous engageons à les traiter avec confidentialité, transparence et conformément aux lois applicables.
          </p>

          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold text-blue-900 mb-2">{section.title}</h2>
                {section.content?.map((p, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-2">{p}</p>
                ))}
                {section.list && (
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-2 space-y-1 ml-1">
                    {section.list.map((item, i) => (
                      <li key={i} className="marker:text-blue-600">{item}</li>
                    ))}
                  </ul>
                )}
                {section.contentAfter?.map((p, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-2">{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-blue-50 border border-blue-100 p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Stethoscope size={20} /> Contact
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="font-semibold">Cabinet du Docteur IFRI</li>
              <li>Chirurgien Orthopédiste Traumatologue</li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <a href="tel:0778603827" className="hover:text-blue-600">0778603827</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                Rond Point en Face de la Gare Routière, Seddouk, Béjaïa, Algérie
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
