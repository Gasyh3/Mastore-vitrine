
"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import React, { useState, useEffect } from 'react'
import apiClient from "@/lib/api-client";
import { ADMIN_API_ROUTES } from "@/utils";
import { useAppStore } from "@/store";
import axios from "axios";
import { useRouter, redirect } from "next/navigation";
import Loading from '@/components/Loading';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loader, setLoader] = useState(true);

    const handleLogin = async () => {
      try {
        const response = await axios.post(ADMIN_API_ROUTES.LOGIN, {
          email,
          password,
        });
        localStorage.setItem("access_token", response.data.token);

      } catch (error) {
        console.log(error);
      }
    };

   useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token
    ) {
      router.push("/admin/dashboard");
    }
  }
  , []);


  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

 

  return loader ? ( 
    <Loading />
 
  ) : (
 <div className='w-full h-[100vh] flex flex-col content-center justify-center'>

    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Bienvenu Admin !
      </h2>
      <p className="text-sky-900 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Connexion administrateur pour gérer les  posts.
      </p>

      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Adresse Email</Label>
          <Input 
            id="email" 
            placeholder="maintenance@mastore.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Mot de passe</Label>
          <Input 
            id="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-sky-900 dark:from-zinc-900 dark:to-zinc-900 to-black block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          onClick={handleLogin}
        >
          Connexion
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
</div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

