import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Фоновое изображение с градиентным наложением */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1508098682722-e99c643e7f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45"></div>
      </div>

      {/* Контент */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 mb-6 drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]">
            ФК ГУДАУТА
          </h1>
          <p className="text-xl md:text-2xl text-yellow-300 mb-8 max-w-3xl mx-auto drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]">
            Футбольный клуб с богатой историей и традициями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/tournaments" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fc-green hover:bg-fc-darkGreen shadow-md transition-all duration-300"
            >
              Турнирные таблицы
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/matches" 
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 shadow-md transition-all duration-300"
            >
              Ближайшие матчи
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
