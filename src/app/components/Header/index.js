'use client'
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { AiOutlineHome} from "react-icons/ai";
import { PiNoteDuotone, PiGear } from "react-icons/pi";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
    <div className={styles.header__container}>
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
              </ul>
              <button className={styles.icon_menu} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                <LuMenu size={26} />
              </button>
            </nav>
      </header>
    </div>
      {isOpenMenu && (
        <div className={styles.mobile_menu}>
          <nav>
            <ul>
              <li><Link href="/"><AiOutlineHome size={22} /> Home</Link></li>
              <li><Link href="/exercises/"><PiNoteDuotone size={22} /> Exercícios</Link></li>
              <li><Link href="/settings/questions"><PiGear size={22} /> Configurações</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
