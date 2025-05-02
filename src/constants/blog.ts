import { blogImages } from './images';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export const featuredPost: BlogPost = {
  id: 1,
  title: 'The Evolution of Sneaker Culture: From Sports to Streetwear',
  excerpt:
    'Explore how sneakers have transformed from athletic footwear to a global cultural phenomenon, influencing fashion, art, and social movements.',
  content: `
    <h2>The Birth of Sneaker Culture</h2>
    <p>The story of sneakers begins in the late 19th century when the first rubber-soled shoes were created. These early sneakers were primarily designed for athletic purposes, with brands like Converse and Keds leading the way in the early 20th century.</p>

    <h2>The Rise of Basketball Sneakers</h2>
    <p>In the 1980s, basketball sneakers became a cultural phenomenon. Michael Jordan's partnership with Nike created the Air Jordan line, which revolutionized both sports and street fashion. The Air Jordan 1, released in 1985, became a symbol of rebellion and style.</p>

    <h2>Streetwear and Hip-Hop Influence</h2>
    <p>During the 1990s, sneakers became deeply intertwined with hip-hop culture. Artists like Run-DMC and their partnership with Adidas helped establish sneakers as a crucial element of street style. The era saw the rise of collecting and trading rare sneakers.</p>

    <h2>Modern Sneaker Culture</h2>
    <p>Today, sneaker culture has evolved into a global phenomenon. Limited-edition releases create massive lines and online queues. Brands collaborate with artists, designers, and celebrities to create unique designs that blend fashion, art, and technology.</p>

    <h2>The Future of Sneaker Culture</h2>
    <p>As we look to the future, sneaker culture continues to evolve with new technologies and sustainable practices. Brands are exploring eco-friendly materials, 3D printing, and smart features while maintaining the cultural significance that makes sneakers more than just footwear.</p>
  `,
  image: blogImages.featuredPost,
  date: 'March 15, 2024',
  author: 'John Doe',
  category: 'Culture',
  readTime: '8 min read',
};

export const recentPosts: BlogPost[] = [
  {
    id: 2,
    title: 'Top 10 Sneaker Trends for 2024',
    excerpt:
      'Discover the latest sneaker trends that are dominating the fashion world this year, from sustainable materials to bold colorways.',
    content: `
      <h2>1. Sustainable Materials</h2>
      <p>Eco-friendly materials are taking center stage in 2024. Brands are using recycled plastics, organic cotton, and innovative plant-based materials to create stylish and sustainable sneakers.</p>

      <h2>2. Chunky Soles</h2>
      <p>The chunky sole trend continues to evolve, with even more dramatic proportions and innovative cushioning technologies.</p>

      <h2>3. Retro Revival</h2>
      <p>Classic designs from the 80s and 90s are making a comeback, with modern updates to materials and comfort features.</p>

      <h2>4. Bold Colorways</h2>
      <p>Vibrant colors and unexpected combinations are defining this year's most popular sneaker releases.</p>

      <h2>5. Hybrid Designs</h2>
      <p>Cross-genre sneakers that blend elements from different styles are becoming increasingly popular.</p>

      <h2>6. Minimalist Aesthetics</h2>
      <p>Clean, simple designs with premium materials are gaining traction among sneaker enthusiasts.</p>

      <h2>7. Tech-Enhanced Features</h2>
      <p>Smart features and advanced materials are becoming more common in everyday sneakers.</p>

      <h2>8. Customization Options</h2>
      <p>Brands are offering more ways to personalize sneakers, from color options to custom details.</p>

      <h2>9. Gender-Neutral Designs</h2>
      <p>Unisex sneaker designs are becoming more prevalent, focusing on universal appeal.</p>

      <h2>10. Limited Editions</h2>
      <p>Exclusive releases and collaborations continue to drive sneaker culture forward.</p>
    `,
    image: blogImages.trends,
    date: 'March 12, 2024',
    author: 'Jane Smith',
    category: 'Trends',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'How to Clean and Maintain Your Sneakers',
    excerpt:
      'Learn professional tips and tricks for keeping your sneakers looking fresh and extending their lifespan.',
    content: `
      <h2>Essential Cleaning Supplies</h2>
      <p>Before you start cleaning your sneakers, gather these essential supplies:</p>
      <ul>
        <li>Soft-bristled brush</li>
        <li>Microfiber cloth</li>
        <li>Mild detergent</li>
        <li>Warm water</li>
        <li>Toothbrush for detailed cleaning</li>
        <li>Protective spray</li>
      </ul>

      <h2>Basic Cleaning Steps</h2>
      <p>Follow these steps for a thorough clean:</p>
      <ol>
        <li>Remove laces and insoles</li>
        <li>Brush off loose dirt</li>
        <li>Create a cleaning solution</li>
        <li>Clean the upper material</li>
        <li>Clean the midsole</li>
        <li>Clean the outsole</li>
        <li>Rinse and dry</li>
      </ol>

      <h2>Material-Specific Care</h2>
      <p>Different materials require different care approaches:</p>
      <ul>
        <li>Leather: Use leather cleaner and conditioner</li>
        <li>Suede: Use suede brush and eraser</li>
        <li>Canvas: Gentle hand washing</li>
        <li>Mesh: Light brushing and spot cleaning</li>
      </ul>

      <h2>Prevention Tips</h2>
      <p>Keep your sneakers looking fresh longer with these prevention tips:</p>
      <ul>
        <li>Apply protective spray</li>
        <li>Rotate your sneakers</li>
        <li>Store properly</li>
        <li>Avoid extreme weather</li>
      </ul>
    `,
    image: blogImages.cleaning,
    date: 'March 10, 2024',
    author: 'Mike Johnson',
    category: 'Care',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'The Rise of Sustainable Sneaker Brands',
    excerpt:
      'Explore how eco-friendly sneaker brands are revolutionizing the industry with innovative materials and sustainable practices.',
    content: `
      <h2>The Environmental Impact of Sneaker Production</h2>
      <p>The sneaker industry has traditionally been resource-intensive, with significant environmental impact. From material sourcing to manufacturing processes, the industry is now facing pressure to become more sustainable.</p>

      <h2>Innovative Materials</h2>
      <p>Leading sustainable sneaker brands are using innovative materials:</p>
      <ul>
        <li>Recycled plastics and textiles</li>
        <li>Plant-based materials</li>
        <li>Biodegradable components</li>
        <li>Organic cotton and natural dyes</li>
      </ul>

      <h2>Sustainable Manufacturing Processes</h2>
      <p>Brands are implementing eco-friendly manufacturing:</p>
      <ul>
        <li>Reduced water usage</li>
        <li>Renewable energy</li>
        <li>Zero-waste production</li>
        <li>Ethical labor practices</li>
      </ul>

      <h2>Leading Sustainable Brands</h2>
      <p>Several brands are leading the way in sustainable sneaker production:</p>
      <ul>
        <li>Allbirds</li>
        <li>Veja</li>
        <li>Rothy's</li>
        <li>Native Shoes</li>
      </ul>

      <h2>The Future of Sustainable Sneakers</h2>
      <p>As technology advances and consumer demand grows, sustainable sneaker production is becoming more accessible and innovative. The industry is moving towards a more circular economy model.</p>
    `,
    image: blogImages.sustainable,
    date: 'March 8, 2024',
    author: 'Sarah Wilson',
    category: 'Sustainability',
    readTime: '7 min read',
  },
];

export const categories = [
  'All',
  'Culture',
  'Trends',
  'Care',
  'Sustainability',
  'Technology',
  'History',
  'Reviews',
]; 