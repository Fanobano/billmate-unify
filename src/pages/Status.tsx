import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Status = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">System Status</h1>
            <p className="text-xl text-muted-foreground">
              Current status of BillMate services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-foreground">Overall Status</h2>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium">All Systems Operational</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Web Application</h3>
                    <p className="text-sm text-muted-foreground">Main BillMate web app</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Operational</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">API Services</h3>
                    <p className="text-sm text-muted-foreground">Core API functionality</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Operational</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground">Billing reminders and alerts</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Operational</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Database</h3>
                    <p className="text-sm text-muted-foreground">Data storage and retrieval</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Operational</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Recent Updates</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">All services running normally</span>
                  <span className="text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Scheduled maintenance completed</span>
                  <span className="text-muted-foreground">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Status;