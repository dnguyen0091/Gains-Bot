import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[--secondary] flex items-center justify-center p-4">
            <div className="text-center max-w-md mx-auto">
                <div className="text-6xl font-bold text-[--accent] mb-4">404</div>
                <h1 className="text-2xl font-bold text-[--text-primary] mb-4">
                    Page Not Found
                </h1>
                <p className="text-[--text-secondary] mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="space-y-3">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full px-6 py-3 bg-[--accent] text-white rounded-lg hover:bg-[--accent-hover] transition-colors duration-200 font-semibold"
                    >
                        Go Home
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="w-full px-6 py-3 bg-[--secondary] text-[--text-primary] border border-[--border] rounded-lg hover:bg-[--tertiary] transition-colors duration-200 font-semibold"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
