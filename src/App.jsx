import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
import React, { useState } from 'react';
import { 
  MapPin, Clock, Calendar, Navigation, ChevronDown, ChevronUp, 
  Info, Utensils, BookOpen, AlertCircle, Car, Plane, Coffee, Map as MapIcon,
  CheckCircle2, Circle
} from 'lucide-react';

// --- DATOS DEL VIAJE ---
const tripData = {
  title: "Oporto en Familia",
  dates: "20 Marzo - 23 Marzo, 2026",
  group: "8 personas (4 Adultos, 4 Niños)",
  days: [
    {
      id: 1,
      date: "Viernes, 20 de Marzo",
      title: "El primer encuentro",
      activities: [
        {
          id: 101,
          time: "13:00",
          title: "Llegada Familia Migue",
          description: "Dejar el coche en el parking del NH Porto Jardim. Caminar a hacer el check-in al apartamento en Santo Ildefonso (600m).",
          location: "NH Porto Jardim / R. Santo Ildefonso",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=NH+Porto+Jardim"
        },
        {
          id: 102,
          time: "19:20",
          title: "Llegada Familia Maca",
          description: "Aterrizaje en el aeropuerto. Coger Uber XL directo al hotel NH Porto Jardim.",
          location: "Aeropuerto -> NH Porto Jardim",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Aeroporto+Francisco+Sa+Carneiro+Porto"
        },
        {
          id: 103,
          time: "20:30",
          title: "Cena en Casa Guedes Tradicional",
          description: "Probar el famoso Sandes de Pernil (bocadillo de jamón asado con queso de oveja). A los niños les encanta sin queso o salchichas.",
          location: "Praça dos Poveiros, 130",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Casa+Guedes+Tradicional+Porto"
        },
        {
          id: 104,
          time: "21:30",
          title: "Postre en McDonald's Imperial",
          description: "Paseo por la Praça de los Poveiros y visita a uno de los McDonald's más bonitos del mundo (vidrieras y lámparas).",
          location: "Praça da Liberdade, 126",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=McDonald%27s+Imperial+Porto"
        }
      ]
    },
    {
      id: 2,
      date: "Sábado, 21 de Marzo",
      title: "Corazón Histórico y Letras",
      activities: [
        {
          id: 201,
          time: "09:00",
          title: "Free Tour Fundamental",
          description: "Estación de São Bento (azulejos) y Catedral de la Sé. Tip niños: buscar el friso del transporte en la estación.",
          location: "Estatua Pedro IV (Punto de encuentro)",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Estatua+D.+Pedro+IV+Porto"
        },
        {
          id: 202,
          time: "11:30",
          title: "Ribeira, Puente Luis I y Funicular",
          description: "Fin del tour. Cruzar el puente por abajo y volver en el Funicular dos Guindais para evitar la cuesta.",
          location: "Ribeira / Funicular",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Funicular+dos+Guindais+Porto"
        },
        {
          id: 203,
          time: "12:30",
          title: "Comida en Brasão Coliseu",
          description: "¡Hora de la Francesinha! Pedid también cebola frita. Para los niños: Croquetes o Pica-pau.",
          location: "R. de Passos Manuel, 205",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Brasao+Coliseu+Porto"
        },
        {
          id: 204,
          time: "15:00 / 15:30",
          title: "Bifurcación: Lello y Clérigos",
          location: "Centro Alto",
          options: [
            {
              id: "optA",
              title: "OPCIÓN A",
              steps: [
                { time: "15:00h", desc: "Torre de los Clérigos + Museo. Al terminar estaréis justo al lado de la librería.", link: "https://www.google.com/maps/search/?api=1&query=Torre+dos+Clerigos+Porto", linkLabel: "Mapa Clérigos" },
                { time: "17:00h", desc: "Librería Lello (Ticket Gold).", link: "https://www.google.com/maps/search/?api=1&query=Livraria+Lello+Porto", linkLabel: "Mapa Lello" }
              ]
            },
            {
              id: "optB",
              title: "OPCIÓN B (Logística ganadora)",
              steps: [
                { time: "15:30h", desc: "Librería Lello (Entrada Gold).", link: "https://www.google.com/maps/search/?api=1&query=Livraria+Lello+Porto", linkLabel: "Mapa Lello" },
                { time: "17:00h", desc: "Torre de los Clérigos. La subida es más icónica y la zona tiene más vida para el grupo.", link: "https://www.google.com/maps/search/?api=1&query=Torre+dos+Clerigos+Porto", linkLabel: "Mapa Clérigos" }
              ]
            }
          ]
        },
        {
          id: 206,
          time: "18:15",
          title: "Merienda en Manteigaria",
          description: "El Kit-Kat de la tarde. Pastéis de nata calientes. Los niños pueden ver cómo los hornean. Opcional: comerlos en Jardim das Oliveiras.",
          location: "Rua dos Clérigos, 37",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Manteigaria+Rua+dos+Clerigos+Porto"
        },
        {
          id: 207,
          time: "20:30",
          title: "Cena en Café Santiago",
          description: "Famoso por 'la mejor francesinha de Portugal'. Ir sobre las 20:00h para hacer cola ya que no reservan.",
          location: "R. de Passos Manuel, 226",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Cafe+Santiago+Porto"
        }
      ]
    },
    {
      id: 3,
      date: "Domingo, 22 de Marzo",
      title: "El Duero y el Mar",
      activities: [
        {
          id: 301,
          time: "10:00",
          title: "Tranvía 1 hacia Foz",
          description: "Paseo por el Faro de Felgueiras. Se paga a bordo.",
          location: "Parada Infante",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Paragem+Electrico+Infante+Porto"
        },
        {
          id: 302,
          time: "13:00",
          title: "Comida en Casa Dias (Gaia)",
          description: "Pescado fresco a la brasa o Bacalhau à Brás. Para niños: Frango no churrasco.",
          location: "R. do Agro 143, Gaia",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Casa+Dias+Vila+Nova+de+Gaia"
        },
        {
          id: 303,
          time: "15:00",
          title: "Crucero de los 6 puentes",
          description: "Paseo en barco. (Requiere reserva previa)",
          location: "Muelle de Gaia",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Cais+de+Gaia"
        },
        {
          id: 304,
          time: "16:30",
          title: "Teleférico de Gaia",
          description: "Subida desde el muelle hasta el Jardim do Morro. Vistas increíbles sin esfuerzo.",
          location: "Estación Cais de Gaia",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Teleferico+de+Gaia"
        },
        {
          id: 305,
          time: "18:00",
          title: "Atardecer y Half Rabbit",
          description: "Atardecer en Jardim do Morro. Foto con el Half Rabbit de Bordalo II en una esquina cercana.",
          location: "Jardim do Morro / Half Rabbit",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Half+Rabbit+Bordalo+II+Gaia"
        },
        {
          id: 306,
          time: "19:30",
          title: "Cruzar Puente Luis I (Arriba)",
          description: "Cruzar caminando por la parte superior hacia Oporto y bajar a la Ribeira en funicular o callejeando.",
          location: "Puente Luis I (Tablero Superior)",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Ponte+Luis+I+Porto"
        },
        {
          id: 307,
          time: "20:30",
          title: "Cena en Restaurante Terreiro",
          description: "Polvo à lagareiro (Pulpo asado). Opciones de pasta o pescado frito suave para los peques.",
          location: "Largo do Terreiro 11",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Restaurante+Terreiro+Porto"
        }
      ]
    },
    {
      id: 4,
      date: "Lunes, 23 de Marzo",
      title: "Despedida Gourmet",
      activities: [
        {
          id: 401,
          time: "10:00",
          title: "Mercado do Bolhão",
          description: "Mucho más divertido y flexible que el Palacio de la Bolsa para ir con niños y maletas.",
          location: "R. Formosa 322",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Mercado+do+Bolhao+Porto"
        },
        {
          id: 402,
          time: "11:15",
          title: "Manteigaria (Alexandre Braga)",
          description: "Comprar cajas de 6 unidades para el viaje. Pedir canela/azúcar aparte para que no se ablanden.",
          location: "Rua de Alexandre Braga, 24",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Manteigaria+Rua+de+Alexandre+Braga+Porto"
        },
        {
          id: 403,
          time: "11:30",
          title: "Los Cachorrinhos (Gazela)",
          description: "Perritos calientes picaditos y crujientes. ¡Vuelan!",
          location: "Cervejaria Gazela, R. Entreparedes 8",
          mapsLink: "https://www.google.com/maps/search/?api=1&query=Cervejaria+Gazela+Porto"
        },
        {
          id: 404,
          time: "12:45",
          title: "Recogida de maletas y despedida",
          description: "Fin del viaje. Maca coge Uber a las 13:45h (vuelo 16:05h). Migue coordina coche en parking.",
          location: "Alojamientos",
          mapsLink: ""
        }
      ]
    }
  ]
};

const logisticsData = [
  {
    icon: <Car className="w-5 h-5 text-blue-500" />,
    title: "Coche Migue (Viernes)",
    desc: "Avisar al NH Porto Jardim de la llegada a las 13:00h a nombre de 'Maca'. Aparcar y caminar 600m a R. Santo Ildefonso para check-in."
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    title: "Coche Migue (Lunes)",
    desc: "Check-out es a las 12:00h. Coordinar con NH si se puede dejar el coche hasta las 15:30h (abonando extra o jornada 17,50€)."
  },
  {
    icon: <Plane className="w-5 h-5 text-indigo-500" />,
    title: "Aeropuerto Maca",
    desc: "Vuelo lunes 16:05h. Salir a las 13:45h en Uber XL. Se tarda 25-30 min."
  },
  {
    icon: <MapIcon className="w-5 h-5 text-green-500" />,
    title: "Transporte Interno (8 pers)",
    desc: "Pedir Uber XL o Bolt XL. Si no hay, pedir 2 coches simultáneos. Son económicos. Entre alojamientos (NH y Santo Ildefonso) a pie (7 min)."
  },
  {
    icon: <ChevronUp className="w-5 h-5 text-orange-500" />,
    title: "Consejo de Oro (Cuestas)",
    desc: "Oporto es empinado. Para ir del centro alto (Lello) a Ribeira (bajo), bajar andando. Para volver, USAR FUNICULAR o UBER."
  }
];

const pendingReservationsData = [
  { id: 'r1', item: "Librería Lello", status: "Comprar ya (Ticket Gold a las 15:00h o 15:30h)" },
  { id: 'r2', item: "Torre Clérigos", status: "Ticket online (Sábado a las 15:00h o 17:00h)" },
  { id: 'r3', item: "Crucero 6 Puentes", status: "Reservar online (Domingo a las 15:00h)" },
  { id: 'r4', item: "Restaurantes", status: "Brasão y Terreiro (Mín. 2 semanas antes)" }
];

const foodData = [
  { place: "Casa Guedes", adult: "Sandes de pernil com queijo da Serra", kid: "Sandes de pernil sin queso o salchichas frescas" },
  { place: "Brasão & Santiago", adult: "Francesinha (salsa picante) + cebola frita", kid: "Croquetes de carne o Prego no prato/Pica-pau" },
  { place: "Casa Dias", adult: "Pescado fresco a la brasa o Bacalhau à Brás", kid: "Frango no churrasco (Pollo asado) con arroz/patatas" },
  { place: "Terreiro", adult: "Polvo à lagareiro (Pulpo asado)", kid: "Pasta o pescado frito suave" },
  { place: "Manteigaria", adult: "Pastéis de nata con 'cimbalino' (café)", kid: "Pastéis de nata con zumo" }
];

const dictData = [
  { es: "Buenos días (< 13h)", pt: "Bom dia" },
  { es: "Buenas tardes", pt: "Boa tarde" },
  { es: "Buenas noches", pt: "Boa noite" },
  { es: "Por favor", pt: "Por favor / Se faz favor" },
  { es: "Gracias", pt: "Obrigado (él) / Obrigada (ella)" },
  { es: "Perdón / Disculpe", pt: "Desculpe / Com licença" },
  { es: "La cuenta", pt: "A conta, por favor" },
  { es: "Servilletas", pt: "Guardanapos" },
  { es: "Una cerveza", pt: "Uma cerveja / Um fino" },
  { es: "¿Está incluido el pan?", pt: "O couvert está incluído?" }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expandedDay, setExpandedDay] = useState(tripData.days[1].id); // Por defecto abierto el Sábado para ver las opciones
  const [reservations, setReservations] = useState(
    pendingReservationsData.map(r => ({ ...r, done: false }))
  );

  const toggleDay = (id) => {
    setExpandedDay(expandedDay === id ? null : id);
  };

  const openMap = (link) => {
    if(link) window.open(link, '_blank', 'noopener,noreferrer');
  };

  const toggleReservation = (id) => {
    setReservations(reservations.map(r => r.id === id ? { ...r, done: !r.done } : r));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-24">
      {/* Header Fijo */}
      <div className="bg-blue-700 text-white p-6 shadow-md rounded-b-3xl sticky top-0 z-20">
        <h1 className="text-2xl font-bold tracking-tight mb-2">{tripData.title}</h1>
        <div className="flex flex-col text-blue-100 text-sm space-y-1">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{tripData.dates}</span>
          </div>
          <div className="flex items-center">
            <Info className="w-4 h-4 mr-2" />
            <span>{tripData.group}</span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 mt-6">
        
        {/* --- TAB ITINERARIO --- */}
        {activeTab === 'itinerary' && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-gray-500 text-sm mb-4 px-2 text-center">
              Toca un día para expandir los detalles y abrir las rutas.
            </p>
            {tripData.days.map((day) => (
              <div key={day.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleDay(day.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{day.date}</span>
                    <span className="text-lg font-bold text-gray-800">{day.title}</span>
                  </div>
                  <div className={`p-2 rounded-full ${expandedDay === day.id ? 'bg-blue-100 text-blue-700' : 'bg-gray-50 text-gray-400'}`}>
                    {expandedDay === day.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {expandedDay === day.id && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    <div className="relative border-l-2 border-blue-200 ml-3 pl-6 space-y-8 py-2">
                      {day.activities.map((activity) => (
                        <div key={activity.id} className="relative">
                          <div className="absolute -left-[33px] top-1 bg-white border-4 border-blue-500 w-4 h-4 rounded-full"></div>
                          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                            
                            <div className="flex items-center text-blue-600 font-bold mb-1">
                              <Clock className="w-4 h-4 mr-1.5" />
                              <span>{activity.time}</span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{activity.title}</h3>
                            
                            <div className="flex items-start text-gray-500 text-sm mb-3">
                              <MapPin className="w-4 h-4 mr-1.5 mt-0.5 flex-shrink-0" />
                              <span>{activity.location}</span>
                            </div>
                            
                            {activity.options ? (
                              <div className="mb-4 space-y-3">
                                {activity.options.map(opt => (
                                  <div key={opt.id} className={`p-3 rounded-lg border ${opt.id === 'optB' ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                                    <h4 className={`font-bold text-sm mb-2 ${opt.id === 'optB' ? 'text-green-800' : 'text-blue-800'}`}>{opt.title}</h4>
                                    <ul className="space-y-3">
                                      {opt.steps.map((step, idx) => (
                                        <li key={idx} className="flex flex-col text-sm border-b border-gray-200/50 pb-2 last:border-0 last:pb-0">
                                          <div className="mb-1.5">
                                            <span className="font-semibold text-gray-800 mr-1">{step.time}</span> 
                                            <span className="text-gray-600">{step.desc}</span>
                                          </div>
                                          {step.link && (
                                            <button 
                                              onClick={(e) => { e.stopPropagation(); openMap(step.link); }}
                                              className={`flex items-center text-xs px-2 py-1 rounded-md w-fit ${opt.id === 'optB' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'} transition-colors font-medium`}
                                            >
                                              <Navigation className="w-3 h-3 mr-1" />
                                              {step.linkLabel}
                                            </button>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {activity.description}
                              </p>
                            )}
                            
                            {activity.mapsLink && !activity.options && (
                              <button
                                onClick={() => openMap(activity.mapsLink)}
                                className="w-full flex items-center justify-center py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-lg transition-colors"
                              >
                                <Navigation className="w-4 h-4 mr-2" />
                                Ver en Mapa
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* --- TAB GASTRONOMIA --- */}
        {activeTab === 'food' && (
          <div className="space-y-4 animate-fadeIn">
             <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
              <h3 className="font-bold text-orange-800 flex items-center mb-1">
                <Utensils className="w-5 h-5 mr-2" />
                ¿Qué pedir en cada sitio?
              </h3>
              <p className="text-sm text-orange-700">Recomendaciones exactas para que adultos y niños disfruten por igual.</p>
            </div>

            {foodData.map((food, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 border-b pb-2 mb-3">{food.place}</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Para Adultos</span>
                    <p className="text-gray-700 text-sm mt-0.5">{food.adult}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-600">Para Niños</span>
                    <p className="text-gray-700 text-sm mt-0.5">{food.kid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- TAB LOGISTICA --- */}
        {activeTab === 'info' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Tareas Pendientes */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-bold text-red-800 flex items-center mb-3">
                <AlertCircle className="w-5 h-5 mr-2" />
                Reservas Pendientes
              </h3>
              <ul className="space-y-2">
                {reservations.map((res) => (
                  <li 
                    key={res.id} 
                    className={`flex items-start text-sm p-2 rounded-lg transition-colors cursor-pointer ${res.done ? 'bg-red-100/50 opacity-60' : 'hover:bg-red-100/50'}`}
                    onClick={() => toggleReservation(res.id)}
                  >
                    <button className="mt-0.5 mr-3 focus:outline-none text-red-600">
                      {res.done ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5" />}
                    </button>
                    <div className="flex flex-col">
                      <span className={`font-semibold ${res.done ? 'text-gray-500 line-through' : 'text-gray-900'}`}>{res.item}</span>
                      <span className={`${res.done ? 'text-gray-400' : 'text-red-700'}`}>{res.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjetas Logísticas */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-800 ml-1">Reglas del Grupo</h3>
              {logisticsData.map((log, idx) => (
                <div key={idx} className="flex bg-white p-4 rounded-xl shadow-sm border border-gray-100 items-start">
                  <div className="bg-gray-50 p-2 rounded-lg mr-3 shrink-0">
                    {log.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{log.title}</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-snug">{log.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- TAB DICCIONARIO --- */}
        {activeTab === 'dict' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-emerald-50 p-4 rounded-xl mb-6">
              <p className="text-sm text-emerald-800 text-center">
                Unas pocas palabras en portugués garantizan siempre una sonrisa y un mejor servicio.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {dictData.map((word, idx) => (
                <div key={idx} className={`flex justify-between p-4 ${idx !== dictData.length -1 ? 'border-b border-gray-100' : ''}`}>
                  <span className="text-gray-600 text-sm font-medium w-1/2 pr-2">{word.es}</span>
                  <span className="text-blue-700 text-sm font-bold w-1/2 pl-2 border-l border-gray-100">{word.pt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Menú de Navegación Inferior (Fijo) */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
        <div className="max-w-md mx-auto flex justify-around p-2">
          <NavButton 
            icon={<MapIcon className="w-6 h-6" />} 
            label="Ruta" 
            active={activeTab === 'itinerary'} 
            onClick={() => setActiveTab('itinerary')} 
          />
          <NavButton 
            icon={<Utensils className="w-6 h-6" />} 
            label="Comida" 
            active={activeTab === 'food'} 
            onClick={() => setActiveTab('food')} 
          />
          <NavButton 
            icon={<Info className="w-6 h-6" />} 
            label="Logística" 
            active={activeTab === 'info'} 
            onClick={() => setActiveTab('info')} 
          />
          <NavButton 
            icon={<BookOpen className="w-6 h-6" />} 
            label="Idioma" 
            active={activeTab === 'dict'} 
            onClick={() => setActiveTab('dict')} 
          />
        </div>
      </div>
    </div>
  );
};

// Componente para los botones del menú inferior
const NavButton = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all ${active ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
  >
    <div className={`${active ? 'bg-blue-50 p-1.5 rounded-lg' : ''}`}>
      {icon}
    </div>
    <span className={`text-[10px] mt-1 font-medium ${active ? 'font-bold' : ''}`}>{label}</span>
  </button>
);

export default App;