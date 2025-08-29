import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">BillMate Blog</h1>
            <p className="text-xl text-muted-foreground">
              Tips, insights, and updates on subscription management
            </p>
          </div>

          <div className="space-y-8">
            <article className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">
                5 Ways to Reduce Your Monthly Subscription Costs
              </h2>
              <p className="text-muted-foreground mb-4">
                Learn how to identify unused subscriptions and optimize your monthly spending with these proven strategies.
              </p>
              <span className="text-sm text-muted-foreground">December 15, 2024</span>
            </article>

            <article className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">
                The Future of Subscription Management
              </h2>
              <p className="text-muted-foreground mb-4">
                Discover upcoming trends in subscription services and how BillMate is preparing for the future.
              </p>
              <span className="text-sm text-muted-foreground">December 10, 2024</span>
            </article>

            <article className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">
                Small Business Guide to Subscription Tracking
              </h2>
              <p className="text-muted-foreground mb-4">
                Essential tips for small businesses to manage their software subscriptions effectively.
              </p>
              <span className="text-sm text-muted-foreground">December 5, 2024</span>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;