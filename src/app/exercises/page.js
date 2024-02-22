import styles from "@/styles/components/exercises/exercises.module.css";

export default function Exercises() {

  return (
    <main className={styles.container}>
       <nav>
                      <ul>
                          <li>
                            <Link href={"/lessons/apartment-living"}>
                              <PiBuildingsBold  size={26}  />
                              Apartment Living
                            </Link>
                            </li>
                          <li>
                            <Link href={"/lessons/apartment-rent"}>
                              <LuBuilding size={26} />
                              Apartments for Rent
                            </Link>
                          </li>
                          <li>
                            <Link href={"/lessons/dinner-ideas"}>
                              <PiPizzaBold size={26} />
                              Dinner Ideas
                            </Link>
                          </li>
                      </ul>
                </nav>
    </main>
  );
}
