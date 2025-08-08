---
title: "New Portfolio Site"
slug: "new-portfolio-site"
readTime: 6
summary: "My new portfolio site: A deep dive into its development from mockup to deployment."
pubDate: 2025-08-07
# updatedDate: ""
# heroImage: ""
---

## Why Make a New Portfolio Site?

The previous version of my portfolio site was difficult to update whenever I wanted to add/modify a project or change my resume, and I just found the design to be lacking in general. It was a single page site where everything was laid out in a long scrolling page with sections for the hero, about me, my projects, my resume, and contact info. One of the main goals for the new portfolio site was to be more content focused so that I could write and show more about each of my projects and write blog posts. With all that in mind, a single page site just wouldn't cut it anymore.

## Technical Details

Since the new site was going to be more content focused I immediately went to [Astro](https://astro.build/) for my JavaScript framework of choice. I already made a minimalist blog with it before and really enjoyed the speed and developer experience of creating it. Astro's markdown support and content collections were another major reason I chose to use it as I wasn't planning on using any database/cms solution to store project or blog post related files. The file based routing also made it easy to organize the project as a whole and co-locate my content-related files/folders with their associated template pages.

I chose [TailwindCSS](https://tailwindcss.com/) for my CSS framework because it pairs well with Astro and I've been using Tailwind almost exclusively for the past year and a half now. The developer experience and being able to style a component inline makes iteration easier and less mentally taxing. Tailwind is not without its faults in that some components can have dozens of classes added to it making it really difficult to read when you need to troubleshoot a styling-related issue. I found it essential to use the [prettier plugin for tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) to maintain the recommended class order so you can at least know where a type of class will be in any given component. There is also a case to be made about styling things consistently using Tailwind's utility class approach. I usually find that if you develop your components well that it isn't too difficult to keep things consistent without having to constantly recall things like what amount of spacing should be used where and at what breakpoint.

Besides Astro and TailwindCSS, I didn't use any major libraries or frameworks to develop the site. I have [husky](https://typicode.github.io/husky/) and [lint-staged](https://www.npmjs.com/package/lint-staged) to run some checks on any changed files before commiting them to GitHub. I use the [wrangler](https://developers.cloudflare.com/workers/wrangler/) cli to handle deployments via the [Cloudflare Workers](https://developers.cloudflare.com/workers/) platform since the domain is hosted and registered on Cloudflare.

## Design Considerations

Technical, minimalist, and easily readable. That was my goal for the site’s design. I stuck with my previous color scheme of dark gray/almost black and orange with light gray/almost white text. I'm using [Poppins](https://fontsource.org/fonts/poppins) for my sans-serif font and [Fira Code](https://fontsource.org/fonts/fira-code) for my monospace font. I took inspiration from a number of different sites initially like [Linear](https://linear.app/) but ultimately simplified the aesthetic as I found that designing a site like that is harder than it looks and showcasing my 'design' abilities wasn't really the focus of my portfolio site anyway. Overall I am happy with the way everything turned out in the end and I believe I accomplished the design goals I set out with.

## The Development Process

Initial development began in the winter of 2024 when I had the desire to update my portfolio site and I went into Figma to create a mockup of what I wanted it to look like. I went through many design iterations, sometimes months apart as I would stop development to work on a different project or complete a course on [boot.dev](https://www.boot.dev/). The hardest part of developing this site was the homepage's design. At first it was a lot more involved and had small sections in a grid that would showcase the latest blog post/project/now post/game project. No matter how many revisions I did on that layout/design it always felt off and I ultimately decided to keep it short and simple and have the homepage just show what I look like, how to contact me, my current resume, my socials, a short blurb about me, and then lead into the other pages without showing what the latest item added was.

Thankfully, all the other pages were far easier from a design perspective as I could just let the content do most of the heavy lifting to make them visually interesting. It was just a matter of setting up their content collections for projects and blog/now posts that I had to do. I took what I learned from making the blog back in December 2024/January 2025 and implemented the collections more or less the same way to get all of the projects, blog posts, and now posts to work as intended. I did tweak it so that each post/project item had their own folder so that I could co-locate any assets associated with them together and keep the project structure nice and organized.

Once I thought the site was complete enough I soft-launched it on August 04, 2025 and it officially replaced my [old portfolio site](https://github.com/Torvec/myPortfolio) at edward-vonschondorf.dev. Using Cloudflare Workers and Astro made it a breeze to build and upload everything.

## Future Features

A few features I haven't implemented yet but have planned for the near future:

- A QR Code on the home page that I can show to people in person so they can access my portfolio site quickly. Essentially making the site function like a digital business card.
- An "issue submission button" for each page that will take you to GitHub Issues for the site's repository and allow you to report a problem or make a suggestion for improvements.
- Track and display how many people have read each blog post or viewed each project.
- A share button for sharing my blog posts easily on social media sites.

## Things I Learned

1. How to deploy via Cloudflare Workers. I used Cloudflare pages for my statically built sites before, but Workers can do everything pages do and more. I look forward to using more features Workers provide in the near future!
2. Keeping things simple is best (for design and functionality). I can't count how many times I ended up refactoring a component or page and realized I didn't need another component I had built before.
3. Writing content and creating assets like screenshots and icons is hard and I need to come up with a better workflow to automate those processes.
4. Don't spend so much time on a portfolio site in general, making useful/interesting projects will be time better spent in the long run. That said, I'm glad I have a platform where I can post things easily and share it with others from one central location.
5. If you get stuck developing a feature or designing something and you feel like everything you're doing is pointless or not good enough then it's time for a break. Come back with a fresh perspective after doing something else like another project, getting some rest, exercising, or anything fun really.

## Feedback

I'm looking for critiques/feedback on everything from the site's design, how everything is laid out, what I could do better in general, and what I got right. Feel free to leave feedback on the [GitHub Issues page](https://github.com/Torvec/edward-vonschondorf.dev/issues) or wherever I've shared this post.

Thanks for reading!

-EV
