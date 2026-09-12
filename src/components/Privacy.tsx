import { Shield, Eye, Lock, FileText, CheckCircle2 } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Effective Date: July 12, 2026
            </p>
          </div>

          {/* Intro */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700/50">
            <p className="text-gray-300 text-lg leading-relaxed">
              This Privacy Policy explains how our suite of music practice tools (collectively referred to as "Practice Lab Apps", including Bright Sight, Score Tone, Practice Mirror, Practice Mate timer, Spot Practice, Click Up, Practice Koh-Pilot, Rhythm Weaver, Scaled, and Pitch Mate) handles your data. We are committed to protecting your privacy and ensuring a secure experience.
            </p>
          </div>

          {/* Google Services Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Google API Services & User Data</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Some of our applications integrate with Google API Services to provide specific functionalities. We strictly adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>

            <div className="space-y-6">
              {/* Practice Mirror (YouTube) */}
              <div className="border-l-4 border-purple-500 pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">Practice Mirror (YouTube Integration)</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  <strong>How it uses Google Auth:</strong> Practice Mirror requests permission to upload videos to your YouTube account (`youtube.upload` scope). This allows you to upload practice recording sessions directly to your channel.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Data Storage & Privacy:</strong> We do not store, collect, or share your YouTube login credentials, channel data, or videos. All OAuth authentication and video uploads occur directly client-side between your browser and Google's servers. No third-party servers are used to store or access your video files.
                </p>
              </div>

              {/* ScoreTone (Google Drive) */}
              <div className="border-l-4 border-purple-500 pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">ScoreTone (Google Drive & Picker Integration)</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  <strong>How it uses Google Auth:</strong> ScoreTone uses Google OAuth and the Google Picker API to let you select and view PDF sheet music files stored in your Google Drive (`drive.readonly` or `drive.file` scopes).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Data Storage & Privacy:</strong> ScoreTone operates entirely client-side. We do not download, store, or transmit your Google Drive files or metadata to any external servers. The file content is read and rendered locally in your browser session.
                </p>
              </div>
            </div>
          </div>

          {/* General Data Collection */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <Eye className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">General Data Handling</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>No Account Required:</strong> You do not need to create an account with us to use our tools.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Local Storage:</strong> Any application configurations, schedules, practice logs, or preferences are stored locally in your browser (via LocalStorage or IndexedDB) and remain entirely on your device.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>No Analytics/Tracking:</strong> We do not track your usage habits or sell data to advertising networks.</span>
              </li>
            </ul>
          </div>

          {/* Revocation & Third Party ToS */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Third-Party Terms & Revocation</h2>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              By using Practice Mirror, you also agree to be bound by the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">YouTube Terms of Service</a> and Google's main Privacy Policy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You can revoke our applications' access to your Google account at any time. To manage your app permissions, visit the <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Google Security Settings Page</a>.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions & Contact</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us.
            </p>
            <a 
              href="https://www.microsaurus.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Us via Microsaurus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
