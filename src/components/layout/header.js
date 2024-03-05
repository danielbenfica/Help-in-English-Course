'use client'
import Image from "next/image";
import styles from "@/styles/components/layout/header.module.css";
import Link from "next/link";
import { AiOutlineHome, AiOutlineFileText } from "react-icons/ai";
import { PiNoteDuotone, PiGear } from "react-icons/pi";


export default function Header() {
  return (
    <header className={styles.header}>
            <div className={styles.logo__container}>
                <div>
                  <Image src="/logo.png" width={60} height={60} alt="Help Logo" />
                </div>
                <h2 className={styles.logoTitle}>Help in <span>English</span></h2>
            </div>
            <nav>
              <ul>
                <li><Link href="/"><AiOutlineHome size={22} /> Home</Link></li>
                <li><Link href="/exercises/"><PiNoteDuotone size={22} /> Exercícios</Link></li>
                <li><Link href="/settings/questions"><PiGear size={22} /> Configurações</Link></li>
                {/* <li><Link href="./lessons/apartment-living"><AiOutlineFileText   size={22} />Lessons</Link></li> */}
                
                
              </ul>
            </nav>
      </header>
  );
}
