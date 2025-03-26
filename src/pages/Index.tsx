import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CalendarDays, NewspaperIcon, Trophy, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Тестовые данные для турниров
  const tournaments = [
    {
      id: '1',
      name: 'Чемпионат Абхазии 2024',
      description: 'Главный турнир сезона. Наша команда борется за первое место в группе.',
      date: 'Текущий сезон',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: '2',
      name: 'Кубок Абхазии',
      description: 'Кубковый турнир. Команда вышла в четвертьфинал.',
      date: 'Текущий сезон',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2574&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'Турнир памяти А.П. Соколова',
      description: 'Традиционный турнир памяти основателя клуба.',
      date: 'Июнь 2024',
      image: 'https://images.unsplash.com/photo-1518164147695-36c13dd568f5?q=80&w=2670&auto=format&fit=crop'
    }
  ];
  
  // Sample news for the homepage
  const recentNews = [
    {
      id: '1',
      title: 'ФК Гудаута одержал победу над Динамо в матче 3 лиги',
      excerpt: 'Футбольный клуб Гудаута выиграл со счетом 2:0 в домашнем матче против Динамо.',
      date: '15.05.2024',
      image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2574&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'Новый тренер присоединился к команде перед важным матчем',
      excerpt: 'Иван Петров назначен новым главным тренером ФК Гудаута. Он приступит к обязанностям со следующей недели.',
      date: '10.05.2024',
      image: 'https://images.unsplash.com/photo-1518164147695-36c13dd568f5?q=80&w=2670&auto=format&fit=crop'
    },
    {
      id: '3',
      title: 'Открыт набор в детскую футбольную школу ФК Гудаута',
      excerpt: 'Футбольный клуб Гудаута объявляет о наборе детей в возрасте от 5 до 12 лет в детскую футбольную школу.',
      date: '05.05.2024',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2574&auto=format&fit=crop'
    }
  ];
  
  // Sample upcoming matches
  const upcomingMatches = [
    {
      id: '1',
      tournament: '3 Лига ПФЛ',
      homeTeam: {
        name: 'ФК Гудаута',
        logo: 'https://example.com/gudauta-logo.png'
      },
      awayTeam: {
        name: 'Динамо',
        logo: 'https://example.com/dinamo-logo.png'
      },
      date: '15.05.2024',
      time: '19:00'
    },
    {
      id: '2',
      tournament: 'Кубок Абхазии',
      homeTeam: {
        name: 'ФК Гудаута',
        logo: 'https://example.com/gudauta-logo.png'
      },
      awayTeam: {
        name: 'Рица',
        logo: 'https://example.com/ritsa-logo.png'
      },
      date: '20.05.2024',
      time: '17:00'
    },
    {
      id: '3',
      tournament: 'Чемпионат Абхазии',
      homeTeam: {
        name: 'ФК Гудаута',
        logo: 'https://example.com/gudauta-logo.png'
      },
      awayTeam: {
        name: 'Нарт',
        logo: 'https://example.com/nart-logo.png'
      },
      date: '25.05.2024',
      time: '16:00'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Tournaments Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Турниры</h2>
              <Link
                to="/tournaments"
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
              >
                Все турниры
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="bg-white rounded border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-40">
                    <img
                      src={tournament.image}
                      alt={tournament.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-base font-medium text-white">{tournament.name}</h3>
                      <p className="text-xs text-gray-200">{tournament.description}</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center text-xs text-gray-500">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      <span>{tournament.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Matches Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Ближайшие матчи</h2>
              <Link
                to="/matches"
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
              >
                Все матчи
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded border border-gray-200 p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium text-sm">{match.homeTeam.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">VS</span>
                    <div className="flex items-center">
                      <span className="font-medium text-sm">{match.awayTeam.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{match.date}</span>
                    <span>{match.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Последние новости</h2>
              <Link
                to="/news"
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
              >
                Все новости
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded border border-gray-200 overflow-hidden"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-base font-medium text-gray-900 mb-1">{news.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{news.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Медиа</h2>
              <Link
                to="/media"
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
              >
                Все медиа
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div className="relative aspect-square rounded border border-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team Photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Тренировка команды</span>
                </div>
              </div>
              
              <div className="relative aspect-square rounded border border-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Match Photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Матч с ФК Динамо</span>
                </div>
              </div>
              
              <div className="relative aspect-square rounded border border-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Video className="text-white w-8 h-8" />
                </div>
              </div>
              
              <div className="relative aspect-square rounded border border-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80"
                  alt="Stadium Photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Стадион имени А.П. Соколова</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
