"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, User, Calendar, ThumbsUp, Reply } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

interface CommentsSectionProps {
  postSlug: string;
}

// Commentaires de démonstration
const demoComments: Comment[] = [
  {
    id: "1",
    author: "Ahmed Benali",
    content: "Excellent article ! J'ai suivi vos conseils pour choisir mon plombier et j'ai trouvé un professionnel de qualité. Merci M3alem !",
    date: "2024-01-16",
    likes: 5,
    replies: [
      {
        id: "1-1",
        author: "Équipe M3alem",
        content: "Merci Ahmed ! Nous sommes ravis que nos conseils vous aient été utiles. N'hésitez pas à partager votre expérience avec la communauté.",
        date: "2024-01-16",
        likes: 2,
      }
    ]
  },
  {
    id: "2",
    author: "Fatima Zahra",
    content: "Très informatif ! Pourriez-vous faire un article sur comment vérifier les certifications d'un plombier ?",
    date: "2024-01-15",
    likes: 3,
  },
  {
    id: "3",
    author: "Youssef Tazi",
    content: "J'aurais aimé avoir ces informations avant de faire appel à un plombier la semaine dernière... Mais c'est noté pour la prochaine fois !",
    date: "2024-01-15",
    likes: 1,
  }
];

export function CommentsSection({ postSlug }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(demoComments);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !authorName.trim() || !authorEmail.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi de commentaire
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        author: authorName,
        content: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
      };

      setComments([comment, ...comments]);
      setNewComment("");
      setAuthorName("");
      setAuthorEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleLike = (commentId: string) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map(reply => 
            reply.id === commentId 
              ? { ...reply, likes: reply.likes + 1 }
              : reply
          )
        };
      }
      return comment;
    }));
  };

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">
            Commentaires ({comments.length})
          </h3>
        </div>

        {/* Formulaire de nouveau commentaire */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Laisser un commentaire
            </h4>
            
            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Votre nom *"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Votre email *"
                  value={authorEmail}
                  onChange={(e) => setAuthorEmail(e.target.value)}
                  required
                />
              </div>
              
              <Textarea
                placeholder="Votre commentaire *"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                required
              />
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Votre email ne sera pas publié. Les champs obligatoires sont marqués *
                </p>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? "Publication..." : "Publier le commentaire"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Liste des commentaires */}
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {comment.author.charAt(0)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="font-semibold text-gray-900">
                          {comment.author}
                        </h5>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(comment.date).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">
                        {comment.content}
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(comment.id)}
                          className="text-gray-500 hover:text-blue-600"
                        >
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {comment.likes}
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-500 hover:text-blue-600"
                        >
                          <Reply className="w-4 h-4 mr-1" />
                          Répondre
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Réponses */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-6 ml-14 space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {reply.author.charAt(0)}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h6 className="font-semibold text-gray-900 text-sm">
                                {reply.author}
                              </h6>
                              {reply.author.includes("M3alem") && (
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                  Équipe
                                </span>
                              )}
                              <div className="flex items-center text-xs text-gray-500">
                                <Calendar className="w-3 h-3 mr-1" />
                                {new Date(reply.date).toLocaleDateString('fr-FR')}
                              </div>
                            </div>
                            
                            <p className="text-gray-700 text-sm mb-2">
                              {reply.content}
                            </p>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleLike(reply.id)}
                              className="text-gray-500 hover:text-blue-600 text-xs"
                            >
                              <ThumbsUp className="w-3 h-3 mr-1" />
                              {reply.likes}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {comments.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Aucun commentaire pour le moment. Soyez le premier à commenter !
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}

