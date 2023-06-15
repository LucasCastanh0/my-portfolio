import { SectionTitle } from "../sectionTitle/section-tilte"
import "./information.scss"
export function Info(){
    return(
      <div className="infos">
      <SectionTitle text="Languages"/>
      <div className="languages-info">
          <span>🇺🇸 En - Advanced</span>
          <span>🇧🇷  PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education"/>
      <div className="educational-info">
          <span>🎓</span>
          <span> Engenharia de Software UniCesumar - Ponta Grossa</span>
      </div>
  </div>
    )
}