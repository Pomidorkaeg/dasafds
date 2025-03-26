import React, { useState, useEffect } from 'react';
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
      homeTeam: 'ФК Гудаута',
      awayTeam: 'Динамо',
      date: '15.05.2024',
      time: '19:00',
      stadium: 'Стадион имени А.П. Соколова',
      city: 'Гудаута'
    },
    {
      id: '2',
      tournament: 'Кубок Абхазии',
      homeTeam: 'ФК Гудаута',
      awayTeam: 'Рица',
      date: '20.05.2024',
      time: '17:00',
      stadium: 'Стадион имени А.П. Соколова',
      city: 'Гудаута'
    },
    {
      id: '3',
      tournament: 'Чемпионат Абхазии',
      homeTeam: 'ФК Гудаута',
      awayTeam: 'Нарт',
      date: '25.05.2024',
      time: '16:00',
      stadium: 'Стадион имени А.П. Соколова',
      city: 'Гудаута'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <main className="flex-grow page-transition">
        <Hero />
        
        {/* Tournaments Section */}
        <section className="section-padding bg-gradient-to-br from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Турниры и соревнования</h2>
                <p className="text-gray-500 max-w-2xl">
                  Следите за актуальными турнирными таблицами и результатами всех соревнований с участием нашего клуба
                </p>
              </div>
              
              <Link to="/tournaments" className="mt-4 md:mt-0 btn-primary bg-fc-green hover:bg-fc-darkGreen text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Все соревнования
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament) => (
                <Link
                  key={tournament.id}
                  to={`/tournaments/${tournament.id}`}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 bg-white transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={tournament.image} 
                      alt={tournament.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white/90 text-sm mb-1">
                        <Trophy size={14} className="mr-2" />
                        <span>{tournament.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-fc-green transition-colors duration-300">
                      {tournament.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {tournament.description}
                    </p>
                    <div className="flex items-center text-fc-green font-medium text-sm">
                      Подробнее
                      <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Matches Section */}
        <section className="section-padding bg-gradient-to-br from-white to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ближайшие матчи</h2>
                <p className="text-gray-500 max-w-2xl">
                  Не пропустите ближайшие игры нашей команды в различных турнирах
                </p>
              </div>
              
              <Link to="/matches" className="mt-4 md:mt-0 btn-primary bg-fc-green hover:bg-fc-darkGreen text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Все матчи
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <div
                  key={match.id}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 bg-white transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-fc-green/10 text-fc-green rounded-full text-sm font-medium">
                        {match.tournament}
                      </span>
                      <span className="text-sm text-gray-500">{match.date}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg">{match.homeTeam}</span>
                      </div>
                      <span className="text-gray-400">VS</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg">{match.awayTeam}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div>
                        <div className="font-medium text-gray-700">{match.time}</div>
                        <div>{match.stadium}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-medium text-gray-700">г. {match.city}</div>
                        <Link to={`/matches/${match.id}`} className="text-fc-green hover:underline">
                          Подробнее
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Latest News Section */}
        <section className="section-padding bg-gradient-to-br from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Последние новости</h2>
                <p className="text-gray-500 max-w-2xl">
                  Будьте в курсе последних событий из жизни клуба
                </p>
              </div>
              
              <Link to="/news" className="mt-4 md:mt-0 btn-primary bg-fc-green hover:bg-fc-darkGreen text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Все новости
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 card-hover bg-white transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white/90 text-sm mb-1">
                        <NewspaperIcon size={14} className="mr-2" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-fc-green transition-colors duration-300">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center text-fc-green font-medium text-sm">
                      Читать далее
                      <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Media Section */}
        <section className="section-padding bg-gradient-to-br from-white to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Медиа галерея</h2>
                <p className="text-gray-500 max-w-2xl">
                  Фотографии и видео с матчей и тренировок нашей команды
                </p>
              </div>
              
              <Link to="/media" className="mt-4 md:mt-0 btn-primary bg-fc-green hover:bg-fc-darkGreen text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Вся галерея
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden group card-hover shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team Photo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium">Тренировка команды</span>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-xl overflow-hidden group card-hover shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Match Photo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium">Матч с ФК Динамо</span>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-xl overflow-hidden group card-hover shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Video className="text-white w-12 h-12" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white font-medium">Обзор матча</span>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-xl overflow-hidden group card-hover shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80" 
                  alt="Stadium Photo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium">Стадион имени А.П. Соколова</span>
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
