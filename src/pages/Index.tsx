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
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Football stadium"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">
                Турнирные таблицы
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Следите за результатами матчей и турнирными таблицами всех футбольных турниров
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/tournaments"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fc-green hover:bg-fc-green-dark transition-colors"
                >
                  Турнирные таблицы
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/matches"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Ближайшие матчи
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tournaments Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Турниры</h2>
              <Link
                to="/tournaments"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-fc-green hover:bg-fc-green-dark transition-colors"
              >
                Все турниры
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={tournament.image}
                      alt={tournament.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white">{tournament.name}</h3>
                      <p className="text-sm text-gray-200">{tournament.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{tournament.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Matches Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Ближайшие матчи</h2>
              <Link
                to="/matches"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-fc-green hover:bg-fc-green-dark transition-colors"
              >
                Все матчи
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={match.homeTeam.logo}
                        alt={match.homeTeam.name}
                        className="h-8 w-8 mr-2"
                      />
                      <span className="font-medium">{match.homeTeam.name}</span>
                    </div>
                    <span className="text-gray-500">VS</span>
                    <div className="flex items-center">
                      <span className="font-medium">{match.awayTeam.name}</span>
                      <img
                        src={match.awayTeam.logo}
                        alt={match.awayTeam.name}
                        className="h-8 w-8 ml-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{match.date}</span>
                    <span>{match.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Последние новости</h2>
              <Link
                to="/news"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-fc-green hover:bg-fc-green-dark transition-colors"
              >
                Все новости
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{news.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Медиа</h2>
              <Link
                to="/media"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-fc-green hover:bg-fc-green-dark transition-colors"
              >
                Все медиа
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team Photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">Тренировка команды</span>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Match Photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">Матч с ФК Динамо</span>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Video className="text-white w-12 h-12" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">Обзор матча</span>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80"
                  alt="Stadium Photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">Стадион имени А.П. Соколова</span>
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
