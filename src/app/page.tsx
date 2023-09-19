import Image from 'next/image'
import Main from '@/components/main'
import Projects from '@/components/projects'
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main>
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
