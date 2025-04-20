import React from 'react';
import Header from '../../components/Header/Header';
import './About.css';

function About() {
  return (
    <div className="about">
      <Header 
        title="About Task Manager" 
        description="Learn more about our app" 
      />
      
      <main className="container">
        <div className="about-content">
          <h2>Welcome to Task Manager</h2>
          <p>
            Task Manager adalah aplikasi sederhana yang dibuat dengan React untuk membantu
            Anda mengelola tugas sehari-hari dengan mudah dan efisien.
          </p>
          
          <h3>Fitur:</h3>
          <ul>
            <li>Tambah, hapus, dan tandai tugas sebagai selesai</li>
            <li>Penyimpanan lokal di browser Anda</li>
            <li>Antarmuka pengguna yang responsif dan intuitif</li>
            <li>Statistik tugas real-time</li>
          </ul>
          
          <h3>Teknologi:</h3>
          <p>
            Aplikasi ini dibangun menggunakan React dengan functional components dan Hooks.
            Kami juga menggunakan localStorage untuk menyimpan data Anda secara lokal.
          </p>
          
          <h3>Tentang Developer:</h3>
          <p>
            Task Manager dikembangkan sebagai bagian dari praktikum React Basics.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;