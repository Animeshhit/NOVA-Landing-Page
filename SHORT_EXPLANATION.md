# Short Explanation

## Design Decisions

The visual direction for NOVA was based on Clay.com's design language — a warm, cream-colored background paired with bold, high-contrast accent blocks (pink, purple, orange, and dark green) and oversized, confident typography for headlines. The goal was to create a landing page that feels energetic and modern rather than generic SaaS-template, using large type, generous whitespace, and rounded card-based sections to guide the eye down the page (hero → social proof → features → product tour → role-based use cases → testimonial → pricing → FAQ → final CTA).

## Technology Choices

- **Next.js** was chosen as the framework for its component-based structure, fast builds, and easy deployment to Vercel.
- **v0** was used as the primary AI tool to generate and iterate on the initial UI, since it outputs Next.js/React components directly and made it fast to try different layout and color options.
- Design rules were sourced from **[getdesign.md](https://getdesign.md/)**, specifically the Clay.com `design.md` file, which was used as a style reference (color palette, spacing, type scale, and component conventions) to keep v0's output consistent with that aesthetic instead of a default look.

## Component Structure

The page was built as a set of independent, section-level components (Navbar, Hero, SocialProof, FeatureGrid, ProductTour, NovaMethod, RoleTabs, Testimonial, Pricing, FAQ, CTA, Footer), each responsible for its own layout and styling. After the initial v0 generation, a **component restructuring** pass was done to:
- Break up large, monolithic sections into smaller, reusable pieces (e.g., separating card items from the grid container, extracting the pricing card into its own component)
- Standardize props and naming so sections could be reordered or reused easily
- Reduce duplicated markup/styles across similar sections (e.g., the repeating "feature card" pattern)

## Challenges Faced

- Getting v0's generated output to consistently follow the Clay.com design rules rather than drifting toward its own default styling took several rounds of prompting and manual adjustment.
- Some AI-generated sections were structured as single large components, which required manual refactoring to make the codebase maintainable.
- Balancing bold, large typography with responsive behavior across breakpoints needed extra tuning so the design didn't break on smaller screens.

## How AI Tools Were Used

- **v0** generated the initial component code and layout for each section based on prompts describing the desired content and the Clay.com-inspired design rules.
- After generation, manual work included **component restructuring** (splitting components, cleaning up structure) and **performance optimization** (reducing unnecessary re-renders, optimizing images/assets, and trimming unused code) to bring the AI-generated output up to production quality.
