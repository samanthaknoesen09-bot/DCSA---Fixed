"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Phone, User, Bot } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface LiveChatWidgetProps {
  isOpen?: boolean
  onClose?: () => void
}

const FAQ_RESPONSES = [
  {
    keywords: ["debt counselling", "debt review", "what is", "explain"],
    answer: "Think of debt review as a legal reset button for your finances. All your debts get rolled into ONE payment you can actually afford, and creditors have to back off — by law. It's not bankruptcy, it's not giving up. It's being smart enough to ask for help (and honestly, that takes guts).",
  },
  {
    keywords: ["cost", "fee", "price", "how much", "afford"],
    answer: "Full transparency (because surprises are for birthdays, not finances): R50 application, R300-R350 admin fee, restructuring fee (your first month's payment or max R8,000), then 5% monthly aftercare capped at R450. After 2 years it drops to 3%. And your first chat with us? Completely free. No catch.",
  },
  {
    keywords: ["qualify", "eligible", "need", "help"],
    answer: "If payday feels more like panic-day, you're in the right place. Using one card to pay another? Creditors calling at dinner time? Spending more than 40% of your salary on debt? That's exactly what we help with. Try our free Money Map calculator — it's a gentle reality check, zero judgment.",
  },
  {
    keywords: ["credit score", "credit report", "affect credit"],
    answer: "Real talk: yes, debt review shows on your credit report. But here's what most people don't realise — it actually protects you from more damage. Once you complete the process, it gets removed and we help you rebuild. Think of it as pressing pause to heal properly, instead of letting things snowball.",
  },
  {
    keywords: ["how long", "time", "process", "duration"],
    answer: "You're legally protected from day one — that's the good news. The full journey is usually 3-5 years depending on your debt, but that first sigh of relief? That happens immediately. It's a marathon, not a sprint, and you definitely won't be running it alone.",
  },
  {
    keywords: ["start", "apply", "begin", "get started"],
    answer: "Easier than you'd think! Click 'Get Started', fill in Form 16 online (it's straightforward, promise), pop your ID and payslip on there, and we'll review it within 48 hours. Then we walk you through every step. No jargon. No judgment. Just proper help.",
  },
  {
    keywords: ["ncr", "registered", "legitimate", "legal"],
    answer: "100% legit — we're fully NCR registered (NCRDC3995), you can check us on their website. We're a proudly female-led practice, not a call centre reading from a script. Real people, real care, real results.",
  },
  {
    keywords: ["credit repair", "fix credit", "improve score"],
    answer: "Credit repair with us is like having that clever friend who actually understands financial stuff sit down and go through your report with you. We find the errors (there are more than you'd think), challenge them, and help you build a plan to get your score back up. Knowledge is power, hey?",
  },
  {
    keywords: ["help", "hi", "hello", "hey"],
    answer: "Hey! Welcome — you're in the right place. This is a safe, judgment-free zone where you can ask anything about debt, money worries, or just have a chat about your options. Nothing is too small or too embarrassing. What's on your mind?",
  },
]

export function LiveChatWidget({ isOpen: isOpenProp, onClose: onCloseProp }: LiveChatWidgetProps = {}) {
  const [isOpen, setIsOpen] = useState(isOpenProp ?? false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! I'm Sam from DC Sam. Whether you're just curious or seriously stressed about money — either way, you're welcome here. Ask me anything, there are no silly questions. What's on your mind?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [showEscalation, setShowEscalation] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const chatNumber = "27719006298" // 071 900 6298

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const findBestResponse = (userMessage: string): string | null => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const faq of FAQ_RESPONSES) {
      if (faq.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return faq.answer
      }
    }
    
    return null
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])

    const botResponse = findBestResponse(inputMessage)
    
    setTimeout(() => {
      if (botResponse) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, botMessage])
      } else {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Great question! I want to make sure you get a proper answer (not a robot one). How about chatting with one of our team directly? They're lovely, I promise.",
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, botMessage])
        setShowEscalation(true)
      }
    }, 800)

    setInputMessage("")
  }

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])

    const botResponse = findBestResponse(question)
    
    setTimeout(() => {
      if (botResponse) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, botMessage])
      }
    }, 800)
  }

  const sendChatTranscript = () => {
    const transcript = messages
      .map(m => `${m.sender === "user" ? "Client" : "DC Sam Bot"}: ${m.text}`)
      .join("\n\n")
    
    const message = `Chat Transcript:\n\n${transcript}\n\nClient wants to speak with a counsellor.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${chatNumber}?text=${encodedMessage}`, "_blank")
  }

  const quickQuestions = [
    "What is debt counselling?",
    "How much does it cost?",
    "How do I get started?",
    "Am I protected immediately?",
  ]

  return (
    <>
      {/* Chat Float Button with Label */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {!isOpen && (
          <div className="bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-[#0D3B66] border-2 border-[#4DB6AC] animate-pulse">
            Chat with us 💬
          </div>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
        </Button>
      </div>

      {/* Live Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl border-2 border-[#4DB6AC]">
            <CardHeader className="bg-gradient-to-r from-[#4DB6AC] to-[#4DB6AC]/80 text-white rounded-t-lg p-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Live Chat Support
              </CardTitle>
              <p className="text-xs text-white/90">We typically reply instantly</p>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages Area */}
              <ScrollArea className="h-80 p-4" ref={scrollRef}>
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-[#4DB6AC]/20 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-[#4DB6AC]" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-lg px-4 py-2 ${
                          message.sender === "user"
                            ? "bg-[#4DB6AC] text-white"
                            : "bg-gray-100 text-[#0D3B66]"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <div className="w-8 h-8 rounded-full bg-[#0D3B66]/20 flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-[#0D3B66]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Quick Questions */}
              {messages.length <= 1 && (
                <div className="p-4 border-t bg-gray-50">
                  <p className="text-xs font-medium text-[#0D3B66] mb-2">Quick Questions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-auto py-2 bg-transparent hover:bg-[#4DB6AC]/10"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Escalation Options */}
              {showEscalation && (
                <div className="p-4 bg-[#FFD93D]/10 border-t border-[#FFD93D]/30">
                  <p className="text-sm font-semibold text-[#0D3B66] mb-2">
                    Need personalized help?
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-green-500 hover:bg-green-600"
                      onClick={sendChatTranscript}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`tel:0719006298`, "_self")}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-[#0D3B66]/70 mt-2 text-center">
                    071 900 6298
                  </p>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your question..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full"
            onClick={() => {
              setIsOpen(false)
              onCloseProp?.()
            }}
          >
            <X className="h-4 w-4" />
          </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
