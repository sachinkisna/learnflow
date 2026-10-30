"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LearningPathsPage() {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    fetch("/api/learning-paths")
      .then((res) => res.json())
      .then(setPaths);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Learning Paths</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paths.map((path: any) => (
          <Card key={path.id}>
            <CardHeader>
              <CardTitle>{path.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{path.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
