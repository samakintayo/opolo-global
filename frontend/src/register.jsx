import React from "react";
import { useSearchParams } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import { Card, CardContent, CardTitle, CardDescription } from "./components/ui/card";

const Register = () => {
  const [searchParams] = useSearchParams();

  const program = {
    slug: searchParams.get("program"),
    title: searchParams.get("title"),
    type: searchParams.get("type"),
    amount: parseInt(searchParams.get("amount"), 10),
    description: searchParams.get("description"),
    dates: searchParams.get("dates"),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] px-4 py-10">
      
      {/* Soft Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#212121]">
          Secure Your Spot Today
        </h1>
        <p className="mt-2 text-[#212121] text-sm md:text-base">
          Complete the registration below to join this program.
        </p>
      </header>

      {/* Card */}
      <Card className="w-full max-w-5xl shadow-xl rounded-3xl border-none overflow-visible flex flex-col md:flex-row">
        
        {/* Left Side - Program Info */}
        <div className="md:w-1/2 bg-[#5C6BC0] text-white p-6 md:p-10 flex flex-col justify-center items-center">
          <CardTitle className="text-2xl md:text-3xl font-extrabold text-center">
            {program.title}
          </CardTitle>
          {program.description && (
            <CardDescription className="mt-3 text-center text-white/80 text-sm md:text-base">
              {program.description}
            </CardDescription>
          )}
          {program.dates && (
            <p className="mt-3 text-center text-white/70 text-xs md:text-sm">
              {program.dates}
            </p>
          )}
          <p className="mt-4 text-center text-2xl md:text-3xl font-bold">
            ₦{program.amount.toLocaleString()}
          </p>
        </div>

        {/* Right Side - Registration Form */}
        <CardContent className="md:w-1/2 bg-white p-6 md:p-10 flex items-center justify-center">
          <div className="w-full max-w-md flex flex-col justify-start">
            <RegistrationForm
              programType={program.type}
              amount={program.amount}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
