import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"

noriegaTheme.bodyFontFamily = ["Lora", "serif"]

const typography = new Typography(noriegaTheme)

export const { scale, rhythm, options } = typography
export default typography
