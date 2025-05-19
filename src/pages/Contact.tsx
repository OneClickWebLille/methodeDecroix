import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">
            Vous avez des questions ? N'hésitez pas à nous contacter.
          </p>
        </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">methodedecroix@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">+33 6 69 26 13 94</p>
                </div>
              </div>
              {/* <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                  <p className="text-gray-600">123 Rue de l'Innovation<br />75001 Paris, France</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
  );
}