import Navbar from "../components/_shared/Navbar"
import Footer from "../components/_shared/Footer"
import character from "../assets/character.png";

const Home = () => {

  return (
    <>
      <Navbar />
      <body> 
      <div className="overflow-x-hidden">
      <svg className="h-96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fed7aa" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,256C840,267,960,245,1080,240C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      {/* top */}
      <div className="absolute top-32 h-72 w-full flex items-center justify-around">
        <div>
          <span className="text-3xl text-blue-900 hover:text-blue-950">Stay </span>
          <span className="text-3xl text-emerald-400 hover:text-emerald-500">Hungry </span>
          <span className="text-3xl text-blue-900 hover:text-blue-950">Stay </span>
          <span className="text-3xl text-emerald-400 hover:text-emerald-500">Foolish</span>
        </div>
          <img className="transition hover:scale-105" src={character} alt="character" />
      </div>
      {/* center */}
      <div className="p-10">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at risus fermentum orci fringilla porttitor ac eu magna. Nam consectetur quam varius felis tempus, vel placerat velit rutrum. Etiam ut ultricies neque, eget viverra est. Curabitur turpis dui, bibendum quis dui dignissim, rhoncus feugiat purus. Praesent porta blandit auctor. In in urna commodo, dictum justo at, gravida magna. Nulla facilisi. Donec ipsum leo, ultrices sit amet dictum ac, posuere sed nisi. Sed in diam tellus. Pellentesque at libero id dui accumsan euismod. Donec luctus maximus nunc, in ultrices lectus gravida ut. Proin ultrices dolor ex, eu bibendum quam sagittis id. Vestibulum ut lectus tempus, mattis lacus eu, cursus risus. Praesent lobortis sollicitudin magna ut posuere.
          Aliquam at nunc accumsan, gravida elit sed, iaculis nulla. Ut molestie magna ut enim maximus placerat. Vestibulum elit enim, fermentum et commodo vitae, sodales et felis. Vivamus tincidunt lacinia magna, vitae ultrices massa imperdiet vitae. Duis ultrices felis et ullamcorper fermentum. Aenean urna velit, scelerisque ac orci hendrerit, tincidunt tempus lectus. In lobortis libero sed justo mollis varius. Ut eu nisi non tortor bibendum lacinia at at justo. Nullam sed dapibus libero. Nullam vitae lacinia erat. Pellentesque laoreet neque nec lectus sollicitudin, et porta ligula volutpat. Fusce in posuere ligula. Curabitur gravida consequat convallis.
          Cras ut dictum arcu, sit amet dapibus urna. Aenean sodales, metus ac scelerisque euismod, arcu felis molestie est, ut placerat felis turpis gravida velit. Curabitur mauris dolor, imperdiet at pharetra at, mattis mattis nibh. Donec non nunc sapien. Cras convallis massa vitae quam pellentesque, at molestie ipsum ullamcorper. Donec in gravida leo, a eleifend diam. Nullam sed massa gravida, tempor urna nec, congue velit. Sed erat leo, accumsan vitae massa id, euismod mollis ex. Mauris eu viverra lectus. Maecenas velit dolor, aliquet ut elementum a, viverra ut nibh. Vivamus rhoncus massa eu ipsum pharetra interdum. In hac habitasse platea dictumst. Cras facilisis nibh ex, et pharetra ex sagittis nec.
          Quisque mattis odio eget ipsum posuere commodo. Nulla semper venenatis leo, ac aliquet magna volutpat id. Vivamus interdum vel nibh vel auctor. Cras luctus neque nisl, in scelerisque dui porttitor a. Praesent porttitor mi ut tempus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique massa ut urna accumsan semper. Ut a velit nec sem feugiat sodales. Nam consectetur enim sed mi euismod suscipit. Praesent posuere libero nec nunc laoreet dictum. Nulla in sollicitudin nisl, eu blandit metus. Nulla lacus velit, faucibus semper gravida id, volutpat vel neque. Nulla luctus, sapien vitae pulvinar mattis, turpis turpis pulvinar ex, ut dignissim felis magna eget lorem.
          Vivamus dapibus sem lectus, quis auctor sapien iaculis porta. Aliquam erat volutpat. Quisque porta tellus vel semper pharetra. Donec ac vestibulum velit, non cursus mi. Aenean a tellus eget mi efficitur consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tempus, dolor vitae commodo laoreet, magna enim sodales metus, non consectetur eros nunc et lectus. Curabitur non tincidunt eros, ut fermentum elit. Etiam ornare, orci quis elementum auctor, ligula metus facilisis est, at efficitur est augue id nulla. Duis pellentesque, leo vitae consectetur vestibulum, turpis orci placerat erat, at euismod diam lacus at ligula. Aliquam erat volutpat.</p>
      </div>
    </div>
    <footer>
      <Footer />
      </footer>
      </body>
    </>
  )
}

export default Home