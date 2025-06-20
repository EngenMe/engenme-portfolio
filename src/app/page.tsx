export default function Home() {
    return (
        <div className="p-8 space-y-8">
            {/* Test Inter font */}
            <div>
                <h2 className="text-2xl font-bold mb-2">Inter Font Test</h2>
                <p className="font-sans text-lg">
                    The quick brown fox jumps over the lazy dog. 123456789
                </p>
                <p style={{ fontFamily: 'Times, serif' }} className="text-lg text-gray-500">
                    Compare with Times (serif) - should look different
                </p>
            </div>

            {/* Test JetBrains Mono */}
            <div>
                <h2 className="text-2xl font-bold mb-2">JetBrains Mono Test</h2>
            </div>

            {/* Font weight test */}
            <div>
                <h2 className="text-2xl font-bold mb-2">Font Weight Test</h2>
                <p className="font-sans font-light">Light weight (300)</p>
                <p className="font-sans font-normal">Normal weight (400)</p>
                <p className="font-sans font-medium">Medium weight (500)</p>
                <p className="font-sans font-semibold">Semibold weight (600)</p>
                <p className="font-sans font-bold">Bold weight (700)</p>
            </div>
        </div>
    );
}