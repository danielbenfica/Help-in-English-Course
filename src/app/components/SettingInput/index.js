import styles from '@/styles/pages/settings/settings.module.css'

export default function SettingInput({icon, name, value, onChange}){
  return (
    <div  className={styles.option_card}>
            <div> 
              {icon}
            </div>
            <div>
            <h2>{name}:</h2>
              <div>
                <div>
                  <span>Duração:</span>
                  <input 
                    onChange={(e) => onChange(e)}
                    value={value}
                    type="number" /> segundos
                </div>
              </div>
            </div>
    </div>
  )
}