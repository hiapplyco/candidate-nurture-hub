
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from "react-markdown";

const Index = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split('.').pop();
      const filePath = `${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      toast({
        title: "Success",
        description: "File uploaded successfully",
      });

      // Add file upload message to chat
      setMessages(prev => [...prev, {
        role: "user",
        content: `📎 Uploaded file: ${file.name}`
      }]);
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Error",
        description: "Failed to upload file",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async () => {
    if (!url && !textInput) return;

    setIsLoading(true);
    try {
      // Add user message to chat
      const userMessage = [];
      if (url) userMessage.push(`🔗 URL: ${url}`);
      if (textInput) userMessage.push(textInput);

      setMessages(prev => [...prev, {
        role: "user",
        content: userMessage.join('\n\n')
      }]);

      // Clear inputs
      setUrl("");
      setTextInput("");

      // TODO: Integrate with AI processing here
      // For now, just add a mock response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: "Thank you for your input. I'll analyze this information and provide detailed feedback shortly.\n\n" +
            "## Key Points\n" +
            "- Input received and processing\n" +
            "- Analysis pending\n" +
            "- Feedback coming soon"
        }]);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Error processing input:', error);
      toast({
        title: "Error",
        description: "Failed to process input",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Input Container */}
        <Card className="p-4 md:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                URL
              </label>
              <Input
                id="url"
                type="url"
                placeholder="Enter URL to analyze"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="file" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Upload File
              </label>
              <Input
                id="file"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileUpload}
                className="cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="text" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Additional Notes
              </label>
              <Textarea
                id="text"
                placeholder="Enter additional notes or instructions"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                rows={4}
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isLoading || (!url && !textInput)}
              className="w-full"
            >
              {isLoading ? "Processing..." : "Submit"}
            </Button>
          </div>
        </Card>

        {/* Chat Messages */}
        <Card className="p-4 md:p-6">
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.role === "assistant"
                      ? "bg-blue-50 dark:bg-blue-900/20"
                      : "bg-gray-50 dark:bg-gray-800/50"
                  } rounded-lg p-4`}
                >
                  <ReactMarkdown className="prose dark:prose-invert max-w-none">
                    {message.content}
                  </ReactMarkdown>
                </div>
              ))}
              {messages.length === 0 && (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  No messages yet. Start by submitting some input above.
                </div>
              )}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

export default Index;
