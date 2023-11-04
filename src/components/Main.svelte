<script>
  import { Modal, Content, Trigger } from "sv-popup";
  //   import More from "./More.svelte";

  import Step from "./Step.svelte";

  let steps = [
    {
      name: "JordanGpt",
      icon: "fa-solid fa-robot",
      description:
        "Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling.",
      link: "https://github.com/hockeyiscool19/jordanGpt",
    },
    {
      name: "Terminal",
      icon: "fa-solid fa-terminal",
      description:
        "Terminal re-invents an old concept, the terminal. In this project, .",
      link: "https://github.com/hockeyiscool19/terminal",
    },
    {
      name: "Mom Texter",
      icon: "fa-solid fa-person",
      description:
        "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).",
      link: "https://github.com/hockeyiscool19/mom-texter",
    },
    {
      name: "Spotify API",
      icon: "fa-solid fa-music",
      description:
        "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).",
      link: "https://github.com/hockeyiscool19/spotify_API",
    },
  ];

  let benefits = [
    {
      metric: "10x",
      name: "Ughhhh, Math",
      description:
        "Before anything, I consider myself a debater and philosopher. After reaching the national parliamentary debate tournament, however, I resolved not to study my strength but to fix a weakness, mathematics. Mathematics was both my worst and least favorite subject in high school, but, as I gave the subject a second, third, and fourth chance, I learned to love and embrace the challenge.",
    },
    {
      metric: "10x",
      name: "Slow Start",
      description:
        'I began programming journey at Davidson College\'s College Crisis initiative, studying Covid-19 data. That summer, I was lucky enough to have one Ben Kauffman believe in me before I believed in myself. "You are a data person" he told me. Ben convinced me to take an interview with Esme Learning, a now defunct start-up. I struggled all summer, but I left feeling inspired to learn more.',
    },
    {
      name: "Yellow Investments Era",
      description:
        "After an eventful Davidson College night, Yellowtail Investments was born. Our goal was to eliminate the tedious copy and paste work of analysts. And we foolishly thought we could do it. Though ultimately unsuccessful, I learned how to guide technical vision within teams and how to build great software with other engineers.",
    },
    {
      name: "Learn to develop",
      description:
        "Interning at Q2 Software, I gained experience navigating our team's highly abstracted code base. My mentor, Gage, was invaluable to my development, teaching me how to critically analyze software, code, and design patterns. My other team members always held my code to the highest level of scrutiny during code review, which was crucial to my professional development.",
    },
    {
      name: "Tesla",
      description:
        "During the eighth week of my sixteen week internship, I was informed of three facts. 1) My supervisor had resigned. 2) My manager had resigned. 3) Our team faced a critical migration of Kubernetes infrastructure. I needed to finish this migration alone. At Tesla, I came into my own, as it was the first time I had to own a project of this magnitude alone.",
    },
  ];
  // This will turn on when clicked
  let showModal = false;
  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Jordan</span>
        <br />Software & Data
        <span class="poppins text-violet-400">Engineer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        I <span class="text-violet-400"> love </span> making data-driven
        applications. From machine learning to backend services, I have you
        <span class="text-violet-400"> covered</span>.
      </p>
      <div class="flex justify-center lg:justify-start space-x-4">
        <Modal>
          <Content>
            <div class="mb-6">
              <form>
                <div class="mb-6">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Name</label
                  >
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your email</label
                  >
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="jdoe@example.com"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your message</label
                  >
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Message..."
                  />
                </div>

                <button
                  on:click={openModal}
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Submit</button
                >
              </form>

              <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
              </p>
            </div>
          </Content>

          <!-- button, link, or any element that triggers popup on click -->
          <Trigger>
            <button
              class="blueShadow text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
              <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
              />
              <h4 class="relative z-9">
                <i class={"fa-solid fa-envelope"} /> Get in touch
              </h4>
            </button>
          </Trigger>
        </Modal>

        <button
          class="blueShadow text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          />
          <a
            href={"images/resume.pdf"}
            class="block z-10 text-inherit no-underline"
            download="eisenmanJordan.pdf"
          >
            <h4 class="relative z-9">
              <i class={"fa-solid fa-download"} /> Resume
            </h4>
          </a>
        </button>
        <button
          class="blueShadow text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 class="relative z-9">
            <a
              href={"https://github.com/hockeyiscool19/"}
              class="block z-10 text-inherit no-underline"
            >
              <i class={"fa-brands fa-github-alt"} /> Github
            </a>
          </h4>
        </button>
      </div>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="Zetane Engine"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          JordanGpt an API exposing information about my career, as well as a <strong
            class="text-violet-400">langchain chatbot</strong
          >! I implemented this project using
          <strong class="text-violet-400"
            >Flask, Langchain, Docker, Firestore, and Cloud Run</strong
          >.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Terminal re-invents an old concept, <strong class="text-violet-400"
            >the terminal</strong
          >. <strong class="text-violet-400">Terminals</strong> of old take in
          strict commands and manipulate your local programs and machine. This
          <strong class="text-violet-400">terminal</strong> is serves as a
          chatbot which takes in text, like a chatbot, but is capable of
          manipulating my email. In this project, I use
          <strong class="text-violet-400"
            >Python, OpenAi's API, Streamlit chat UI, Langchain agents,
            firebase, and Google's API</strong
          >.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Why send texts to your mom when you have <strong
            class="text-violet-400"
            >machine learning
          </strong>. In this project, I implement a CLI program capable of
          taking in a list of dates. Using
          <strong class="text-violet-400"
            >AWS, ECS, Fargate, and Twillio
          </strong>, the program schedules texts to my mom &#128140;.
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          In this project, I use Spotfy's open source API to retrieve my
          personal listening data. I expose this data with <strong
            class="text-violet-400">Python</strong
          >
          through a <strong class="text-violet-400">Flask API</strong>.
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        My <span class="poppins text-violet-400">journey</span>.
      </h3>
    </div>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>
              {benefit.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
      The <span class="text-violet-400">Complete</span> Package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class={"border-b border-solid border-slate-200  "}>
          <tr class="">
            <th />
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
              >Me</th
            >
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Dedication</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Critical Thought</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr>
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Interpersonal Skills</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-t border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Progamming Ability</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto">So why not invest?</p>
  </section>
</main>

<style>
</style>
