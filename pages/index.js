import Dashboard from "@/components/Dashboard";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required:true,
    onUnauthenticated(){
      router.push("/auth/signin")
    }
  });
  if(status === "loading"){
    return <Loader />
  }
   
  return (
    <div className="">
      <Head>
        <title>Spotify-clone</title>
      </Head>

      <Dashboard />
    </div>
  );
}
