import './App.css'

export default function App() {
  return (
    <>
      <div class=" p-6">
        <h1 class="text-3xl font-bold text-left">Noé Kurata</h1>
        <p class="text-left">Developer | noe.kurata@epitech.eu | +33 7 81 98 09 01</p>
        <img src="headshot.jpg" alt="Description" class="absolute top-10 right-20 w-36 h-36 rounded-lg" />
      </div>
      <div class="p-6">
          <h2 class="text-2xl font-bold  mb-4 text-left">About Me</h2>
          <p class=" text-left">As a third-year Masters student at EPITECH on the International Track, I'm currently mastering a wide array of programming languages and web technologies. My practical experience ranges from freelance web development and graphic production to internships in technical support and graphic design, showcasing my versatility and ability to apply theoretical knowledge in real-world scenarios. Born and raised in France, I've attended both international and French public schools helping me develop a strong foundation in both French and English. As well as that I’ve spent a semester in Barcelona helping me get better and Spanish and helping me adapt quickly to foreign countries. This combination of academic rigor, technical proficiency, and international exposure positions me uniquely to contribute to innovative projects, blending my technical skills with a creative and global mindset.</p>
      </div>
      <div class="flex justify-center">
        <div class="w-1/3 p-6">
          <h2 class="text-2xl font-bold mb-4  text-left">Skills</h2>
          <ul class="list-disc list-inside text-left">
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>Haskell </li>
            <li>HTML / CSS / Javascript <span class="text-gray-400">(Tailwind CSS)</span></li>
            <li>PHP</li>
            <li>SQL</li>
            <li>Laravel (Nova)</li>
            <li>Git / Github</li>
            <li>Mac OS / Linux / Windows</li>
            <li>Adobe Suite </li>
            <div class="ml-6">
              <p class="text-gray-400">Video Editing</p>
              <p class="text-gray-400">Graphic Design</p>
              <p class="text-gray-400">Motion Graphics</p>
            </div>
          </ul>
      </div>
        <div class="w-1/3 p-6">
          <h3 class="text-2xl font-bold  mb-4">Experience</h3>
          <h5 class="text-xl ">ACT Responsible</h5>
          <h7 class="text-gray-400">Remote & France</h7>
            <p>Freelance Web development & Video +<br />Graphic production</p>
            <p class="text-gray-400">Jun 2020 - Present</p>
            <br />
          <h6 class="text-xl ">Adforum</h6>
          <h8 class="text-gray-400">Paris 17e, France</h8>
            <p>Technical Support Intern</p>
            <p class="text-gray-400">Aug 2023 - Dec 2023</p>
            <br />
          <h4 class="text-xl ">Conceptory</h4>
          <h9 class="text-gray-400">Bagnolet, France</h9>
            <p>Graphic Designer</p>
            <p class="text-gray-400">Feb 2018 - Mar 2018</p>
          <br />
        </div>
        <div class="w-1/3 p-6">
          <h2 class="text-2xl font-bold  mb-4">Education</h2>
          <h3 class="text-xl ">EPITECH</h3>
          <h7 class="text-gray-400">International Track</h7>
            <p>Masters Degree</p>
            <p class="text-gray-400">Sept 2022 - Present</p>
            <br />
          <h4 class="text-xl ">Lycée Alain</h4>
          <h8 class="text-gray-400">Le Vésinet, France</h8>
            <p>French European Baccalaureate</p>
            <p class="text-gray-400">Sept 2019 - July 2022</p>
            <br />
          <h5 class="text-xl ">Lycée International</h5>
          <h6 class="text-gray-400">St Germain-en-Laye, France</h6>
            <p>International Brevet (OIB)</p>
            <p class="text-gray-400">Sept 2010 - Jun 2019</p>
            <br />
        </div>
      </div>
    </>
  )
}
