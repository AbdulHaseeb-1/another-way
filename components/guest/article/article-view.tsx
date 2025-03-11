import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  MessageCircle,
  Heart,
  Bookmark,
} from "lucide-react";

export default function ArticlePage() {
  return (
    <div className="">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Technology
          </div>

          <h1 className="font-heading text-2xl md:text-4xl font-bold lg:text-5xl">
            The Future of Artificial Intelligence: Transforming Industries and
            Everyday Life
          </h1>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <time dateTime="2023-11-15">November 15, 2023</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 py-6">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" alt="Author" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="font-semibold">Jane Doe</div>
          {/* <div className="text-sm text-muted-foreground">
            AI Researcher & Tech Writer
          </div> */}
        </div>
        <div className="ml-auto grid grid-cols-2 grid-rows-2 gap-1 md:flex flex-row md:gap-2">
          <Button variant="ghost" size="icon">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Share on Twitter</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Share on Facebook</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">Share on LinkedIn</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative w-full">
        <Image
          src="/images/p.png"
          alt="Article cover image"
          width={1200}
          height={600}
          className="aspect-video rounded-lg object-cover"
          priority
        />
        <div className="mt-2 text-sm text-muted-foreground">
          AI-powered technologies are reshaping how we work, live, and interact
          with the world around us.
        </div>
      </div>
      <article className="prose prose-gray dark:prose-invert mx-auto mt-8 max-w-3xl">
        <p className="lead">
          Artificial Intelligence (AI) has rapidly evolved from a niche
          technological concept to a transformative force across industries. As
          we stand at the cusp of a new era, AI technologies are not only
          reshaping business operations but also fundamentally changing how we
          interact with the world around us.
        </p>
        <br />
        <p>
          The integration of AI into everyday applications has accelerated
          dramatically in recent years. From voice assistants that manage our
          homes to recommendation algorithms that curate our entertainment, AI
          has become an invisible yet omnipresent companion in modern life. This
          widespread adoption marks just the beginning of what experts predict
          will be a profound technological revolution.
        </p>

        <h2>The Current State of AI</h2>

        <br />
        <p>
          Today's AI landscape is dominated by machine learning models that
          excel at pattern recognition and prediction. These systems power
          everything from fraud detection in banking to diagnostic tools in
          healthcare. The recent advances in generative AI have captured public
          imagination, demonstrating the ability to create content that was
          previously the exclusive domain of human creativity.
        </p>

        <blockquote>
          "We're witnessing the democratization of AI capabilities that were
          unimaginable just five years ago. The barrier to entry has never been
          lower, and the potential applications have never been broader." — Dr.
          Sarah Chen, AI Research Director
        </blockquote>

        <br />
        <p>
          Large language models like GPT-4 represent a significant leap forward,
          exhibiting an unprecedented understanding of context and nuance in
          human language. These models are already being deployed across
          customer service, content creation, and educational applications,
          augmenting human capabilities rather than simply automating routine
          tasks.
        </p>

        <h2>Transforming Industries</h2>

        <p>
          The impact of AI across sectors cannot be overstated. In healthcare,
          AI algorithms are helping to identify diseases from medical images
          with accuracy that rivals or exceeds that of human specialists.
          Manufacturing has embraced AI for predictive maintenance, reducing
          downtime and extending the lifespan of critical equipment.
        </p>

        <br />
        <p>
          Financial services have been revolutionized by AI-powered risk
          assessment models that can analyze vast datasets to make lending
          decisions in seconds rather than days. Retail has leveraged AI to
          create personalized shopping experiences, predicting consumer
          preferences with remarkable accuracy.
        </p>

        <h3>Key Industries Being Reshaped:</h3>

        <ul>
          <li>
            <strong>Healthcare:</strong> Diagnostic assistance, drug discovery,
            personalized treatment plans
          </li>
          <li>
            <strong>Finance:</strong> Algorithmic trading, fraud detection,
            automated customer service
          </li>
          <li>
            <strong>Transportation:</strong> Autonomous vehicles, traffic
            optimization, logistics planning
          </li>
          <li>
            <strong>Education:</strong> Personalized learning paths, automated
            grading, intelligent tutoring systems
          </li>
          <li>
            <strong>Agriculture:</strong> Precision farming, crop monitoring,
            yield prediction
          </li>
        </ul>

        <h2>Ethical Considerations and Challenges</h2>

        <p>
          The rapid advancement of AI technologies brings with it a host of
          ethical considerations. Questions about data privacy, algorithmic
          bias, and the potential displacement of workers are at the forefront
          of public discourse. As AI systems become more autonomous and
          influential, ensuring they operate within ethical boundaries becomes
          increasingly important.
        </p>

        <br />
        <p>
          Transparency in AI decision-making processes remains a significant
          challenge. Many advanced AI models function as "black boxes," making
          it difficult to understand how they arrive at specific conclusions.
          This opacity raises concerns in high-stakes domains like healthcare
          and criminal justice, where the reasoning behind decisions can be as
          important as the decisions themselves.
        </p>

        <h2>The Road Ahead</h2>

        <p>
          Looking to the future, the trajectory of AI development points toward
          more sophisticated, context-aware systems that can collaborate with
          humans in increasingly natural ways. The concept of artificial general
          intelligence (AGI)—AI that can perform any intellectual task that a
          human can—remains a distant but influential goal that continues to
          drive research and development.
        </p>
        <br />
        <p>
          In the nearer term, we can expect to see continued integration of AI
          into critical infrastructure, more intuitive human-computer
          interfaces, and increasingly personalized services across all aspects
          of life. The challenge for society will be to harness these powerful
          tools while mitigating potential risks and ensuring that the benefits
          of AI are broadly shared.
        </p>

        <h2>Conclusion</h2>

        <p>
          The AI revolution is not a future prospect but a present reality that
          is unfolding before our eyes. As these technologies continue to evolve
          and permeate every aspect of our lives, they promise to unlock new
          levels of productivity, creativity, and understanding. The most
          profound impacts may come not from AI replacing human capabilities,
          but from the new possibilities that emerge when human ingenuity is
          augmented by artificial intelligence.
        </p>
        <br />
        <p>
          The coming decades will be defined not just by what AI can do, but by
          how we choose to apply it. With thoughtful implementation and careful
          consideration of the ethical implications, artificial intelligence has
          the potential to help solve some of humanity's most pressing
          challenges and open doors to opportunities we have yet to imagine.
        </p>
      </article>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Like</span>
          </Button>
          <span className="text-sm text-muted-foreground">423 likes</span>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">Comment</span>
          </Button>
          <span className="text-sm text-muted-foreground">89 comments</span>
        </div>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-5 w-5" />
          <span className="sr-only">Bookmark</span>
        </Button>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">About the Author</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" alt="Author" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h3 className="font-bold">Jane Doe</h3>
            <p className="text-muted-foreground">
              Jane Doe is a leading AI researcher and technology writer with
              over a decade of experience in the field. She has contributed to
              numerous publications on artificial intelligence, machine
              learning, and the societal impacts of emerging technologies. Jane
              holds a Ph.D. in Computer Science from MIT and currently leads AI
              ethics research at a major technology company.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Twitter className="mr-2 h-4 w-4" />
                Follow
              </Button>
              <Button variant="outline" size="sm">
                View all articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Related Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={`/images/p.png`}
                  alt={`Related article ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">
                    October 30, 2023
                  </div>
                  <h3 className="font-bold">
                    How Machine Learning is Revolutionizing Healthcare
                    Diagnostics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    New AI models are achieving unprecedented accuracy in early
                    disease detection, potentially saving millions of lives.
                  </p>
                  <Link href="#" className="text-sm font-medium text-primary">
                    Read more
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Comments (89)</h2>
          <Button>Add Comment</Button>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <Avatar>
                <AvatarImage
                  src={`/placeholder.svg?text=User${i}`}
                  alt={`User ${i}`}
                />
                <AvatarFallback>U{i}</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">User Name {i}</h4>
                  <span className="text-xs text-muted-foreground">
                    2 days ago
                  </span>
                </div>
                <p className="text-sm">
                  This is a fantastic overview of the current AI landscape. I
                  particularly appreciated the section on ethical
                  considerations, as this is often overlooked in discussions
                  about technological advancement. Looking forward to more
                  articles in this series!
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-foreground">
                    <Heart className="h-4 w-4" /> 12
                  </button>
                  <button className="hover:text-foreground">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full">
          Load More Comments
        </Button>
      </div>
    </div>
  );
}
