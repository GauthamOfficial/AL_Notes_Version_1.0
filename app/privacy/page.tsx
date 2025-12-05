import Link from 'next/link';
import { BookOpen, Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-blue/80 via-bg-soft/80 to-white/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80">
      {/* Header - Sticky */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-soft border-b border-gray-100 dark:border-gray-700 sticky top-0 z-50 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-text-primary dark:text-gray-100 group-hover:text-text-primary dark:group-hover:text-gray-100 transition-colors flex-shrink-0" />
              <div className="flex flex-col sm:block">
                <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-text-primary dark:text-gray-100 font-display leading-tight">
                  <span className="block sm:inline">A/L</span>{' '}
                  <span className="block sm:inline">நோTස්</span>
                </h1>
                <p className="text-xs text-text-secondary dark:text-gray-400 hidden sm:block">SL Student Relief</p>
              </div>
            </Link>
            <nav className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
              <ThemeToggle />
              <Link
                href="/browse"
                className="text-text-secondary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium px-2 sm:px-3 md:px-4 py-2 rounded-full hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-200 text-sm sm:text-base whitespace-nowrap"
              >
                Browse
              </Link>
              <Link
                href="/upload"
                className="btn-primary flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 sm:px-3 md:px-6 whitespace-nowrap"
              >
                Upload Notes
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="card animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-2xl"></div>
              <div className="bg-gradient-to-br from-primary-100 dark:from-primary-900/30 to-blue-100 dark:to-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-soft">
                <Shield className="h-10 w-10 text-primary-500 dark:text-primary-400" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary dark:text-gray-100 mb-3 font-display">
              Privacy Policy
            </h1>
            <p className="text-text-secondary dark:text-gray-300 text-sm sm:text-base">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  Information We Collect
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                When you sign in with Google to upload study notes, we collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 ml-4">
                <li>Your email address (provided by Google)</li>
                <li>Your name (if provided by Google)</li>
                <li>Metadata about uploaded notes (title, description, stream, subject, medium)</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  How We Use Your Information
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                We use your information solely for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 ml-4">
                <li>To identify you as the uploader of study notes</li>
                <li>To store uploaded PDF files in your personal Google Drive account</li>
                <li>To display your name as the contributor of notes (to give credit to contributors)</li>
                <li>To enable you to manage and delete your own uploaded notes</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  Google Drive Access
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                We use Google Drive API with the scope <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">https://www.googleapis.com/auth/drive.file</code> to store PDF files you upload. This scope provides minimal access:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 ml-4">
                <li>We can only access files you create through our app</li>
                <li>We cannot access your entire Google Drive</li>
                <li>Files are stored in your personal Google Drive account</li>
                <li>You have full control over these files in your Google Drive</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  Data Storage
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                We store different types of data in different locations:
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4 mb-4">
                <p className="text-text-secondary dark:text-gray-300 mb-2">
                  <strong className="text-text-primary dark:text-gray-100">Note Metadata:</strong> Stored in Supabase database (title, description, subject, stream, medium, uploader name, etc.)
                </p>
                <p className="text-text-secondary dark:text-gray-300">
                  <strong className="text-text-primary dark:text-gray-100">PDF Files:</strong> Stored in your personal Google Drive account
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  Your Rights
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                You have the following rights regarding your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 ml-4">
                <li>You can delete your uploaded notes at any time, which removes both the metadata and the file from your Google Drive</li>
                <li>You can revoke Google Drive access at any time through your Google Account settings</li>
                <li>You can request information about what data we have stored about you</li>
                <li>You can stop using the service at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Data Security
              </h2>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                We take data security seriously:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 ml-4">
                <li>All data transmission is encrypted using HTTPS</li>
                <li>We use secure authentication via Google OAuth</li>
                <li>Database access is restricted and secured</li>
                <li>We do not share your personal information with third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Children's Privacy
              </h2>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                Our service is designed for educational purposes and may be used by students. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Changes to This Privacy Policy
              </h2>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  Contact Us
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4">
                <p className="text-text-secondary dark:text-gray-300">
                  <strong className="text-text-primary dark:text-gray-100">Email:</strong> kumargautham28official@gmail.com
                </p>
                <p className="text-text-secondary dark:text-gray-300 mt-2">
                  <strong className="text-text-primary dark:text-gray-100">Project:</strong> A/L நோTස් - SL Student Relief
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700 mt-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left text-text-secondary dark:text-gray-400 text-sm">
              © 2025 A/L நோTස් - Helping students recover from natural disasters
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-text-secondary dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-secondary dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

