<script>
  import { goto } from '$app/navigation';

  let testimonials = [
    { name: "Alice", feedback: "This task manager has revolutionized the way I handle my daily tasks!" },
    { name: "Bob", feedback: "Simple, effective, and intuitive. Highly recommend!" },
    { name: "Charlie", feedback: "A must-have tool for anyone looking to boost their productivity." }
  ];

  let features = [
    { title: "Task Categorization", description: "Organize your tasks by categories such as work, personal, and more." },
    { title: "Due Date Tracking", description: "Set and manage due dates to never miss a deadline." },
    { title: "Priority Levels", description: "Assign priority levels to focus on what's most important." },
    { title: "User-friendly Interface", description: "Enjoy a clean and intuitive design for a seamless experience." },
    { title: "Cross-Platform", description: "Access your tasks from any device, anywhere, anytime." }
  ];

  function handleSignUp() {
    goto('/register');
  }
</script>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  h1 {
    color: #333;
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }
  h2 {
    color: #007BFF;
    margin-top: 1em;
  }
  p {
    color: #666;
    line-height: 1.5;
  }
  .features, .testimonials {
    text-align: left;
    margin-top: 20px;
  }
  .feature, .testimonial {
    margin: 20px 0;
  }
  .feature-title {
    font-size: 1.2em;
    color: #007BFF;
  }
  .testimonial-feedback {
    font-style: italic;
  }
  .cta {
    margin-top: 30px;
    padding: 20px;
    background-color: #007BFF;
    color: white;
    border-radius: 8px;
    text-align: center;
  }
  .cta-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: white;
    color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .cta-button:hover {
    background-color: #e0e0e0;
  }
</style>

<div class="container">
  <h1>About Us</h1>
  <p>This is a personal task manager application that helps you keep track of your tasks efficiently.</p>

  <h2>Key Features</h2>
  <div class="features">
    {#each features as feature}
      <div class="feature">
        <h3 class="feature-title">{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    {/each}
  </div>

  <h2>Testimonials</h2>
  <div class="testimonials">
    {#each testimonials as testimonial}
      <div class="testimonial">
        <p class="testimonial-feedback">"{testimonial.feedback}"</p>
        <p><strong>- {testimonial.name}</strong></p>
      </div>
    {/each}
  </div>

  <div class="cta">
    <h2>Get Started Today!</h2>
    <p>Join thousands of users who have improved their productivity with our task manager.</p>
    <button class="cta-button" on:click={handleSignUp}>Sign Up Now</button>
  </div>
</div>
