import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import BorderAnimatedContainer from "../components/BorderAnimatedContainer"

function SignUpPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" })
  const { signUp, isSigningUp } = useAuthStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp(formData)
  }

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">

              </div>

            </div>

          </div>

        </BorderAnimatedContainer>

      </div>
    </div>

  )
}

export default SignUpPage
