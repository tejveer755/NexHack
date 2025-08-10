'use client';
import React, { useState, useRef, useCallback } from 'react';
import { Upload, Download, Scissors, User, Sparkles, Zap, X, RotateCcw, Save, Award, Calendar, MapPin, Trophy } from 'lucide-react';

const BadgeGenerator = () => {
  const [name, setName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropModal, setShowCropModal] = useState(false);
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 200, height: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const modalRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setShowCropModal(true);
        // Reset crop area when new image is loaded
        setCropArea({ x: 50, y: 50, width: 200, height: 200 });
        setImageScale(1);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const rect = modalRef.current?.getBoundingClientRect();
    if (rect) {
      setDragStart({
        x: e.clientX - rect.left - cropArea.x,
        y: e.clientY - rect.top - cropArea.y
      });
    }
  };

  const handleDrag = useCallback((e) => {
    if (!isDragging || !imageRef.current || !modalRef.current) return;

    const modalRect = modalRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();
    
    const relativeX = e.clientX - imageRect.left;
    const relativeY = e.clientY - imageRect.top;
    
    const newX = Math.max(0, Math.min(relativeX - dragStart.x, imageRect.width - cropArea.width));
    const newY = Math.max(0, Math.min(relativeY - dragStart.y, imageRect.height - cropArea.height));

    setCropArea(prev => ({ ...prev, x: newX, y: newY }));
  }, [isDragging, dragStart, cropArea.width, cropArea.height]);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragEnd);
      return () => {
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [isDragging, handleDrag]);

  const handleCropSizeChange = (newSize) => {
    setCropArea(prev => ({
      ...prev,
      width: Math.min(newSize, 300),
      height: Math.min(newSize, 300)
    }));
  };

  const saveCroppedImage = () => {
    if (!uploadedImage || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    const scaleX = img.naturalWidth / img.offsetWidth;
    const scaleY = img.naturalHeight / img.offsetHeight;

    canvas.width = 200;
    canvas.height = 200;

    ctx.drawImage(
      img,
      cropArea.x * scaleX,
      cropArea.y * scaleY,
      cropArea.width * scaleX,
      cropArea.height * scaleY,
      0,
      0,
      200,
      200
    );

    const croppedDataUrl = canvas.toDataURL();
    setCroppedImage(croppedDataUrl);
    setShowCropModal(false);
  };

  const clearAllData = () => {
    setName('');
    setUploadedImage(null);
    setCroppedImage(null);
    setShowCropModal(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const generateBadge = () => {
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    const badgeCanvas = document.createElement('canvas');
    const ctx = badgeCanvas.getContext('2d');
    
    badgeCanvas.width = 450;
    badgeCanvas.height = 650;

    // Background with professional gradient
    const bgGradient = ctx.createLinearGradient(0, 0, 450, 650);
    bgGradient.addColorStop(0, '#0a0a0a');
    bgGradient.addColorStop(0.3, '#1a1a2e');
    bgGradient.addColorStop(0.7, '#16213e');
    bgGradient.addColorStop(1, '#0f3460');
    
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 450, 650);

    // Top accent bar
    const topGradient = ctx.createLinearGradient(0, 0, 450, 0);
    topGradient.addColorStop(0, '#00ffff');
    topGradient.addColorStop(0.5, '#ff1493');
    topGradient.addColorStop(1, '#9d4edd');
    
    ctx.fillStyle = topGradient;
    ctx.fillRect(0, 0, 450, 8);

    // Header section with improved styling
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('NexHack', 225, 60);

    // Year badge
    ctx.fillStyle = '#00ffff';
    ctx.fillRect(180, 70, 90, 25);
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('2025', 225, 88);

    ctx.fillStyle = '#ff1493';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Hack the Track of AI Impact', 225, 120);

    // Professional card background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(25, 140, 400, 360);
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(25, 140, 400, 360);

    // Profile section
    const profileY = 200;
    
    if (croppedImage) {
      const img = new Image();
      img.onload = () => {
        // Profile image with glow effect
        ctx.save();
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(225, profileY, 80, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, 145, profileY - 80, 160, 160);
        ctx.restore();

        // Professional border
        ctx.beginPath();
        ctx.arc(225, profileY, 80, 0, Math.PI * 2);
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Inner border
        ctx.beginPath();
        ctx.arc(225, profileY, 85, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        finalizeBadge();
      };
      img.src = croppedImage;
    } else {
      // Default professional avatar
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.arc(225, profileY, 80, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = '64px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('👤', 225, profileY + 20);
      
      finalizeBadge();
    }

    function finalizeBadge() {
      // Name section with better typography
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px Arial';
      ctx.textAlign = 'center';
      const nameY = profileY + 120;
      ctx.fillText(name.toUpperCase(), 225, nameY);

      // Underline for name
      const nameWidth = ctx.measureText(name.toUpperCase()).width;
      ctx.fillStyle = '#ff1493';
      ctx.fillRect(225 - nameWidth/2, nameY + 5, nameWidth, 3);

      // Participant badge
      ctx.fillStyle = '#9d4edd';
      ctx.fillRect(150, nameY + 20, 150, 30);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Arial';
      ctx.fillText('PARTICIPANT', 225, nameY + 40);

      // Professional info cards
      const cardY = nameY + 80;
      
      // Round 1 card
      ctx.fillStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.fillRect(40, cardY, 160, 50);
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.strokeRect(40, cardY, 160, 50);
      
      ctx.fillStyle = '#00ffff';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('ROUND 1', 120, cardY + 18);
      ctx.font = '12px Arial';
      ctx.fillText('20 Sept 2025', 120, cardY + 35);

      // Round 2 card
      ctx.fillStyle = 'rgba(255, 20, 147, 0.1)';
      ctx.fillRect(250, cardY, 160, 50);
      ctx.strokeStyle = '#ff1493';
      ctx.lineWidth = 1;
      ctx.strokeRect(250, cardY, 160, 50);
      
      ctx.fillStyle = '#ff1493';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('ROUND 2', 330, cardY + 18);
      ctx.font = '12px Arial';
      ctx.fillText('26-27 Sept 2025', 330, cardY + 35);

      // Venue section
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('VENUE', 225, cardY + 85);
      
      ctx.font = '12px Arial';
      ctx.fillStyle = '#cccccc';
      ctx.fillText('Institute of Information Technology', 225, cardY + 105);
      ctx.fillText('and Management, Janakpuri', 225, cardY + 120);

      // Organizer section with logo placeholder
      ctx.fillStyle = 'rgba(157, 78, 221, 0.1)';
      ctx.fillRect(75, cardY + 140, 300, 40);
      ctx.strokeStyle = '#9d4edd';
      ctx.lineWidth = 1;
      ctx.strokeRect(75, cardY + 140, 300, 40);
      
      ctx.fillStyle = '#9d4edd';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Organized by NexVerse IITM', 225, cardY + 165);

      // Bottom decorative elements
      const bottomY = 580;
      
      // Tech pattern decoration
      ctx.fillStyle = '#00ffff';
      for (let i = 0; i < 5; i++) {
        ctx.fillRect(50 + i * 80, bottomY, 60, 2);
      }
      
      // QR code placeholder with better design
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(350, bottomY + 10, 80, 80);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.strokeRect(350, bottomY + 10, 80, 80);
      
      // QR pattern simulation
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if ((i + j) % 2 === 0) {
            ctx.fillRect(355 + i * 8, bottomY + 15 + j * 8, 6, 6);
          }
        }
      }
      
      ctx.fillStyle = '#cccccc';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Scan for', 390, bottomY + 105);
      ctx.fillText('more info', 390, bottomY + 118);

      // Serial number
      ctx.fillStyle = '#666666';
      ctx.font = '10px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`ID: NH${Date.now().toString().slice(-6)}`, 50, bottomY + 50);

      // Download the badge
      const link = document.createElement('a');
      link.download = `${name.replace(/\s+/g, '_')}_NexHack_Badge.png`;
      link.href = badgeCanvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black  to-gray-950 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            NexHack Badge Generator
          </h1>
          <p className="text-gray-300 text-xl">Create your personalized hackathon badge</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="text-cyan-400" />
              Create Your Badge
            </h2>

            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-cyan-400 font-medium mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name..."
                className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label className="block text-cyan-400 font-medium mb-2">Profile Picture</label>
              <div className="relative">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full px-4 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg font-medium"
                >
                  <Upload size={24} />
                  {croppedImage ? 'Change Photo' : 'Upload Photo'}
                </button>
              </div>
            </div>

            {/* Cropped Image Preview */}
            {croppedImage && (
              <div className="mb-6 p-4 bg-gray-800/30 rounded-xl border border-cyan-400/30">
                <h3 className="text-white font-medium mb-3">Profile Preview</h3>
                <div className="flex items-center gap-4">
                  <img
                    src={croppedImage}
                    alt="Profile preview"
                    className="w-16 h-16 rounded-full border-2 border-cyan-400"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                  >
                    Change
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={generateBadge}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                <Download size={24} />
                Generate & Download Badge
              </button>
              
              <button
                onClick={clearAllData}
                className="w-full px-6 py-3 bg-red-600/80 hover:bg-red-600 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RotateCcw size={20} />
                Clear All Data
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="text-pink-400" />
              Badge Preview
            </h2>

            {/* Enhanced Badge Preview */}
            <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 rounded-2xl p-8 text-center border-2 border-cyan-400/30 relative overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600"></div>
              
              <div className="mb-4">
                <h3 className="text-white font-bold text-2xl mb-1">NexHack</h3>
                <div className="inline-block bg-cyan-400 text-black px-3 py-1 rounded text-sm font-bold mb-2">2025</div>
                <p className="text-pink-400 text-sm">Hack the Track of AI Impact</p>
              </div>

              {/* Professional card background */}
              <div className="bg-white/5 rounded-xl p-6 border border-cyan-400/20 mb-4">
                <div className="mb-4">
                  {croppedImage ? (
                    <img
                      src={croppedImage}
                      alt="Profile"
                      className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-400 shadow-lg shadow-cyan-400/50"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-gray-700/50 border-4 border-cyan-400 flex items-center justify-center">
                      <User className="text-cyan-400" size={32} />
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-bold text-xl mb-1">
                    {name || 'YOUR NAME'}
                  </h4>
                  {name && <div className="h-0.5 bg-pink-400 w-16 mx-auto mb-2"></div>}
                  <div className="bg-purple-600 inline-block px-4 py-1 rounded text-white text-sm font-bold">
                    PARTICIPANT
                  </div>
                </div>

                {/* Info cards */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-1 text-cyan-400 font-bold">
                      <Calendar size={12} />
                      ROUND 1
                    </div>
                    <div className="text-gray-300">20 Sept 2025</div>
                  </div>
                  <div className="bg-pink-400/10 border border-pink-400/30 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-1 text-pink-400 font-bold">
                      <Trophy size={12} />
                      ROUND 2
                    </div>
                    <div className="text-gray-300">26-27 Sept</div>
                  </div>
                </div>

                <div className="text-xs text-gray-300 space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <MapPin size={10} />
                    <span className="text-white font-medium">VENUE</span>
                  </div>
                  <p>IITM Janakpuri</p>
                </div>
              </div>

              {/* Organizer */}
              <div className="bg-purple-600/10 border border-purple-400/30 rounded-lg p-2 mb-4">
                <p className="text-purple-400 font-bold text-sm">Organized by NexVerse IITM</p>
              </div>

              {/* Bottom elements */}
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  ID: NH{Date.now().toString().slice(-6)}
                </div>
                <div className="w-8 h-8 bg-white/10 border border-white/30 rounded flex items-center justify-center">
                  <div className="text-xs">QR</div>
                </div>
              </div>
            </div>

            {/* Event Info */}
            <div className="mt-6 p-4 bg-gray-800/30 rounded-xl border border-purple-500/30">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <Award className="text-yellow-400" />
                Event Highlights
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="text-cyan-400" size={14} />
                  National-level hybrid hackathon
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="text-yellow-400" size={14} />
                  Two-round competition format
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="text-pink-400" size={14} />
                  AI Impact focused challenges
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="text-purple-400" size={14} />
                  Venue: IITM Janakpuri
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-green-400" size={14} />
                  Prizes worth ₹2.5 Lakh+
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Crop Modal */}
        {showCropModal && uploadedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full border border-purple-500/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-xl flex items-center gap-2">
                  <Scissors className="text-cyan-400" />
                  Crop Your Image
                </h3>
                <button
                  onClick={() => setShowCropModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6" ref={modalRef}>
                <div className="relative inline-block max-w-full">
                  <img
                    ref={imageRef}
                    src={uploadedImage}
                    alt="Crop preview"
                    className="max-w-full max-h-96 rounded-lg"
                    style={{ transform: `scale(${imageScale})` }}
                  />
                  <div
                    className="absolute border-2 border-cyan-400 cursor-move bg-cyan-400/10 backdrop-blur-sm"
                    style={{
                      left: cropArea.x,
                      top: cropArea.y,
                      width: cropArea.width,
                      height: cropArea.height,
                      borderRadius: '50%'
                    }}
                    onMouseDown={handleDragStart}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Scissors className="text-cyan-400" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Crop Controls */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-cyan-400 font-medium mb-2">Crop Size</label>
                  <input
                    type="range"
                    min="100"
                    max="300"
                    value={cropArea.width}
                    onChange={(e) => handleCropSizeChange(parseInt(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-pink-400 font-medium mb-2">Image Zoom</label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={imageScale}
                    onChange={(e) => setImageScale(parseFloat(e.target.value))}
                    className="w-full accent-pink-400"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowCropModal(false)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveCroppedImage}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default BadgeGenerator;