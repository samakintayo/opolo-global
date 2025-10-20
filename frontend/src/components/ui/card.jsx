import * as React from "react";

const Card = ({ className = "", ...props }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props} />
);

const CardHeader = ({ className = "", ...props }) => (
  <div className={`flex flex-col space-y-2 p-4 sm:p-6 ${className}`} {...props} />
);

const CardTitle = ({ className = "", ...props }) => (
  <h3 className={`text-xl sm:text-2xl font-semibold leading-tight ${className}`} {...props} />
);

const CardDescription = ({ className = "", ...props }) => (
  <p className={`text-sm text-gray-500 ${className}`} {...props} />
);

const CardContent = ({ className = "", ...props }) => (
  <div className={`p-4 sm:p-6 pt-0 ${className}`} {...props} />
);

const CardFooter = ({ className = "", ...props }) => (
  <div className={`flex items-center p-4 sm:p-6 pt-0 ${className}`} {...props} />
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
