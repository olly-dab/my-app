"use client";

import { useState, FormEvent } from 'react';

interface StudentData {
  fullName: string;
  email: string;
  studentId: string;
  phoneNumber: string;
  semester: number;
  major: string;
  course: string;
  previousExperience: string;
  hasLaptop: boolean;
  agreeToTerms: boolean;
}

export default function RegistrationPage() {
  const [formData, setFormData] = useState<StudentData>({
    fullName: '',
    email: '',
    studentId: '',
    phoneNumber: '',
    semester: 1,
    major: 'Computer Science',
    course: 'SE101',
    previousExperience: '',
    hasLaptop: true,
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const majors = [
    'Computer Science',
    'Software Engineering',
    'Computer Engineering',
    'Information Systems',
    'Information Technology',
    'Data Science',
    'Cybersecurity',
    'Other'
  ];

  const courses = [
    'SE101 - Introduction to Software Engineering',
    'SE201 - Object-Oriented Programming',
    'SE301 - Software Design Patterns',
    'SE401 - Software Architecture',
    'SE501 - DevOps & CI/CD',
    'SE601 - Cloud Computing',
    'SE701 - Agile Methodologies',
    'SE801 - Capstone Project'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value) || 1
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      setSubmitMessage('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Registration Data:', formData);
      
      setSubmitMessage('Registration successful! You will receive a confirmation email shortly.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        studentId: '',
        phoneNumber: '',
        semester: 1,
        major: 'Computer Science',
        course: 'SE101',
        previousExperience: '',
        hasLaptop: true,
        agreeToTerms: false,
      });
      
    } catch (error) {
      setSubmitMessage('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <style jsx global>{`
        /* Force ALL input text to be black */
        input, textarea, select {
          color: black !important;
        }
        
        /* Placeholder text color */
        ::placeholder {
          color: #666 !important;
          opacity: 0.8 !important;
        }
      `}</style>
      
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Software Engineering Lecture Registration
          </h1>
          <p className="text-gray-300">
            Register for Software Engineering courses for the upcoming semester
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="john@university.edu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="STU123456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                Academic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Semester *
                  </label>
                  <input
                    type="number"
                    name="semester"
                    value={formData.semester}
                    onChange={handleInputChange}
                    min="1"
                    max="12"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Major *
                  </label>
                  <select
                    name="major"
                    value={formData.major}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  >
                    {majors.map((major) => (
                      <option key={major} value={major} className="text-black bg-white">
                        {major}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                >
                  {courses.map((course) => (
                    <option key={course} value={course} className="text-black bg-white">
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Previous Programming Experience
                </label>
                <textarea
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="Describe any previous programming or software engineering experience..."
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                Additional Information
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hasLaptop"
                    name="hasLaptop"
                    checked={formData.hasLaptop}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="hasLaptop" className="ml-2 text-gray-700">
                    I have access to a laptop for coursework
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
                    I agree to the terms and conditions and understand that this registration is binding *
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button and Status Message */}
            <div className="pt-6">
              {submitMessage && (
                <div className={`mb-4 p-3 rounded-lg ${
                  submitMessage.includes('successful') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                } transition duration-300 ease-in-out transform hover:scale-[1.02]`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Register for Course'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                * Required fields. You will receive a confirmation email within 24 hours.
              </p>
            </div>
          </form>
        </div>

        {/* Course Information */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Course Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Prerequisites</h4>
              <p className="text-gray-700">Basic programming knowledge (Python/Java)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Duration</h4>
              <p className="text-gray-700">16 weeks | 3 credits | Weekly lectures</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Requirements</h4>
              <p className="text-gray-700">Laptop, IDE installation, GitHub account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}