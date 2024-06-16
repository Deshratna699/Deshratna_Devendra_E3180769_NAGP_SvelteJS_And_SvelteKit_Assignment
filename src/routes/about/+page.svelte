<script>
  import { goto } from '$app/navigation';

  let testimonials = [
    { name: "Alice", feedback: "This task manager has revolutionized the way I handle my daily tasks!" },
    { name: "Bob", feedback: "Simple, effective, and intuitive. Highly recommend!" },
    { name: "Charlie", feedback: "A must-have tool for anyone looking to boost their productivity." }
  ];

  let features = [
    { title: "Task Categorization", description: "Organize your tasks by categories such as work, personal, and more.", icon: "fa-folder-open" },
    { title: "Due Date Tracking", description: "Set and manage due dates to never miss a deadline.", icon: "fa-calendar-check" },
    { title: "Priority Levels", description: "Assign priority levels to focus on what's most important.", icon: "fa-exclamation" },
    { title: "User-friendly Interface", description: "Enjoy a clean and intuitive design for a seamless experience.", icon: "fa-desktop" },
    { title: "Cross-Platform", description: "Access your tasks from any device, anywhere, anytime.", icon: "fa-mobile-alt" }
  ];

  function handleSignUp() {
    goto('/register');
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Raleway:wght@600&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

  :global(body) {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f4f8;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: fadeIn 1.5s ease-in-out;
  }

  .bg-image {
    background: url('https://source.unsplash.com/featured/?productivity') no-repeat center center;
    background-size: cover;
    height: 300px;
    border-radius: 10px;
    margin: 20px 0;
    animation: fadeIn 1.5s ease-in-out;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bg-image::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    position: absolute;
  }

  .bg-image-content {
    position: relative;
    color: white;
    z-index: 1;
    text-align: center;
    animation: zoomIn 1s ease;
  }

  h1 {
    font-family: 'Raleway', sans-serif;
    color: #333;
    font-size: 3em;
    margin-bottom: 20px;
    animation: slideInDown 1s ease;
  }

  h2 {
    font-family: 'Raleway', sans-serif;
    color: #007BFF;
    font-size: 2em;
    margin-top: 40px;
    animation: slideInLeft 1s ease;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .features, .testimonials {
    text-align: left;
    margin-top: 40px;
    animation: slideInUp 1s ease;
  }

  .feature, .testimonial {
    margin: 20px 0;
    display: flex;
    align-items: flex-start;
    animation: fadeIn 2s ease;
  }

  .feature-title, .testimonial-feedback {
    font-family: 'Raleway', sans-serif;
    font-size: 1.2em;
    color: #007BFF;
  }

  .feature-description, .testimonial-name {
    margin-top: 10px;
  }

  .cta {
    margin-top: 50px;
    padding: 30px;
    background: linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(0,207,255,1) 100%);
    color: white;
    border-radius: 10px;
    text-align: center;
    animation: fadeIn 1.5s ease-in-out;
  }

  .cta-button {
    margin-top: 20px;
    padding: 15px 30px;
    background-color: white;
    color: #007BFF;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .cta-button:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }

  .icon {
    margin-right: 10px;
    color: #007BFF;
    font-size: 1.5em;
    animation: zoomIn 1s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }

  @keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideInUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes zoomIn {
    from { transform: scale(0.5); }
    to { transform: scale(1); }
  }
</style>

<div class="container">
  <div class="bg-image">
    <div class="bg-image-content">
      <h1>About Us</h1>
      <p>This is a personal task manager application that helps you keep track of your tasks efficiently.</p>
    </div>
  </div>

  <h2>Key Features</h2>
  <div class="features">
    {#each features as feature}
      <div class="feature">
        <i class={`icon fas ${feature.icon}`}></i>
        <div>
          <h3 class="feature-title">{feature.title}</h3>
          <p class="feature-description">{feature.description}</p>
        </div>
      </div>
    {/each}
  </div>

  <h2>Testimonials</h2>
  <div class="testimonials">
    {#each testimonials as testimonial}
      <div class="testimonial">
        <i class="icon fas fa-quote-left"></i>
        <div>
          <p class="testimonial-feedback">"{testimonial.feedback}"</p>
          <p class="testimonial-name"><strong>- {testimonial.name}</strong></p>
        </div>
      </div>
    {/each}
  </div>

  <div class="cta">
    <h2>Get Started Today!</h2>
    <p>Join thousands of users who have improved their productivity with our task manager.</p>
    <button class="cta-button" on:click={handleSignUp}>Sign Up Now</button>
  </div>
</div>
