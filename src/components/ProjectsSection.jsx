import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Image Caption Generator",
    description: "Deep Learning-Based Captioning App",
    image: "/projects/project1.png",
    tags: [" Python", "TensorFlow", "Keras", "Streamlit", "Matplotlib", "Pickle"],
    demoUrl: "https://image-caption-generator-5badr8t8ppb6qfmyjh3m99.streamlit.app/",
    githubUrl: "https://github.com/Sushanto46/Image-Caption-Generator",
  },
  {
    id: 2,
    title: "GenBlog",
    description:
      "Full-Stack MERN Blogging Platform with AI Integration",
    image: "/projects/project2.png",
    tags: ["ReactJS", "Tailwind CSS", "ExpressJS", "MongoDB", "Node.js", "Google Gemini"],
    demoUrl: "https://blog-mern-ai.vercel.app/",
    githubUrl: "https://github.com/Sushanto46/Blog-MERN-AI",
  },
  {
    id: 3,
    title: "Sorting Visualizer",
    description:
      "Web-based sorting algorithm visualizer with customizable array size and speed control.",
    image: "/projects/project3.png",
    tags: ["Data Structures and algorithms (DSA)", "HTML", "CSS", "Javascript"],
    demoUrl: "https://sushanto46.github.io/Sort-Visualizer/",
    githubUrl: "https://github.com/Sushanto46/Sort-Visualizer",
  },
  {
    id: 4,
    title: "Random Password Generator",
    description:
      "Web app with customizable length, number, and special character options, featuring clipboard copy functionality and real-time password updates.",
    image: "/projects/project4.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://random-password-generator-kappa-six.vercel.app/",
    githubUrl: "https://github.com/Sushanto46/Random-Password-Generator",
  },
  {
    id: 5,
    title: "Animated Interactive Web Experience",
    description:
      "Interactive web experience featuring dynamic animations and  scroll-based effects",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"],
    demoUrl: "https://sushanto46.github.io/TALA/",
    githubUrl: "https://github.com/Sushanto46/TALA",
  },
  {
    id: 6,
    title: "StayEase",
    description:
      "Hotel Booking Full Stack Web Application with many more features",
    image: "/projects/project6.png",
    tags: [ "ReactJS", "Tailwind CSS", "ExpressJS", "MongoDB", "Node.js", "Javascript",  "Stripe"],
    demoUrl: "https://stayease-pi.vercel.app/",
    githubUrl: "https://github.com/Sushanto46/StayEase",
  },
  {
    id: 7,
    title: "To-Do Application",
    description:
      "A feature-rich To-Do app supporting add, edit, delete, and completion checkbox for each task.",
    image: "/projects/project7.png",
    tags: [ "React", "Redux", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://to-do-redux-woad.vercel.app/",
    githubUrl: "https://github.com/Sushanto46/To-Do-Redux",
  },
  {
    id: 8,
    title: "Currency Converter App",
    description:
      "A currency converter app with real-time rates and swap functionality.",
    image: "/projects/project8.png",
    tags: [ 'React', "Tailwind CSS", "JavaScript", "Custom Hooks"],
    demoUrl: "https://currency-converter-iota-seven.vercel.app/",
    githubUrl: "https://github.com/Sushanto46/Currency-converter",
  },
  {
    id: 9,
    title: "Tic-Tac-Toe Game",
    description:
      "A simple browser-based Tic-Tac-Toe game with win and draw detection.",
    image: "/projects/project9.png",
    tags: [ "HTML", "CSS", "JavaScript"],
    demoUrl: "https://sushanto46.github.io/TicTacToe-Game/",
    githubUrl: "https://github.com/Sushanto46/TicTacToe-Game",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Sushanto46"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
