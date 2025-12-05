import Link from 'next/link';
import { BookOpen, FileText, AlertTriangle, CheckCircle, XCircle, Scale } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function TermsPage() {
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
              <div className="absolute inset-0 bg-accent-400/20 rounded-full blur-2xl"></div>
              <div className="bg-gradient-to-br from-accent-100 dark:from-accent-900/30 to-orange-100 dark:to-orange-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-soft">
                <Scale className="h-10 w-10 text-accent-600 dark:text-accent-400" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary dark:text-gray-100 mb-3 font-display">
              Terms of Service
            </h1>
            <p className="text-text-secondary dark:text-gray-300 text-sm sm:text-base">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
            <section className="mb-8">
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                Welcome to A/L நோTස් (AL Notes), a humanitarian platform providing free study materials for flood-affected G.C.E. A/L students in Sri Lanka. By using our service, you agree to the following terms and conditions.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  Use License
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                Permission is granted to temporarily download and use study materials from A/L நோTস for personal, non-commercial educational purposes only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  User Responsibilities
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                When uploading study notes, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 ml-4">
                <li>Only upload educational content related to G.C.E. A/L studies</li>
                <li>Ensure you have the right to share the content you upload</li>
                <li>Not upload copyrighted material without proper authorization</li>
                <li>Not upload harmful, offensive, or inappropriate content</li>
                <li>Not upload files containing viruses or malicious code</li>
                <li>Provide accurate information about the uploaded content (title, subject, stream, medium)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Content Ownership
              </h2>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                By uploading content to our platform:
              </p>
              <div className="bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800 rounded-xl p-4 mb-4">
                <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-900 ml-4">
                  <li>You retain ownership of your uploaded content</li>
                  <li>You grant us a license to store and display your content on our platform</li>
                  <li>You grant other users permission to view and download your content for educational purposes</li>
                  <li>You can delete your content at any time</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-5 w-5 text-red-500 dark:text-red-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 font-display">
                  Prohibited Uses
                </h2>
              </div>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                You may not use our service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 ml-4">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material</li>
                <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Disclaimer
              </h2>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                The materials on A/L நோTස්'s website are provided on an 'as is' basis. A/L நோTස් makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                Further, A/L நோTස් does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Limitations
              </h2>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                In no event shall A/L நோTස් or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on A/L நோTස්'s website, even if A/L நோTස් or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Accuracy of Materials
              </h2>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                The materials appearing on A/L நோTස්'s website could include technical, typographical, or photographic errors. A/L நோTස් does not warrant that any of the materials on its website are accurate, complete, or current. A/L நோTස් may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Links
              </h2>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                A/L நோTස් has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by A/L நோTස් of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Modifications
              </h2>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                A/L நோTස් may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Governing Law
              </h2>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Sri Lanka and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary dark:text-gray-100 mb-4 font-display">
                Contact Information
              </h2>
              <p className="text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800 rounded-xl p-4">
                <p className="text-text-secondary dark:text-gray-900">
                  <strong className="text-text-primary dark:text-gray-900">Email:</strong> kumargautham28official@gmail.com
                </p>
                <p className="text-text-secondary dark:text-gray-900 mt-2">
                  <strong className="text-text-primary dark:text-gray-900">Project:</strong> A/L நோTස් - SL Student Relief
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

