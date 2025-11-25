const DemoSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Video Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Xem cách SRC AI hoạt động và tạo ra những video tuyệt vời chỉ trong vài phút.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-card border border-border rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            {/* Placeholder for video - user will add their video here */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-10 h-10 text-primary" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-lg">
                  Video demo sẽ được thêm vào đây
                </p>
              </div>
            </div>
            
            {/* User can replace the content above with their video embed code */}
            {/* Example: <iframe src="your-video-url" ... /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
