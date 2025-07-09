"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { motion } from "framer-motion";
import {
  X,
  Image as ImageIcon,
  Loader2,
  Check,
  Sparkles,
  Plus,
} from "lucide-react";
import Image from "next/image";

/**
 * 图片上传组件
 * @returns {JSX.Element} 图片上传组件
 */
export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("cartoon");

  const styles = [
    { id: "cartoon", name: "卡通风格", color: "from-blue-500 to-blue-600" },
    { id: "fantasy", name: "仙侠风格", color: "from-purple-500 to-purple-600" },
    { id: "realistic", name: "写实风格", color: "from-green-500 to-green-600" },
    { id: "oil", name: "油画风格", color: "from-yellow-500 to-yellow-600" },
    { id: "watercolor", name: "水彩风格", color: "from-pink-500 to-pink-600" },
    { id: "sketch", name: "素描风格", color: "from-gray-500 to-gray-600" },
  ];

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);

      // 创建预览URL
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);

      // 清除之前生成的图片
      setGeneratedImage(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    maxSize: 5242880, // 5MB
    multiple: false,
  });

  const handleGenerate = () => {
    if (!file) return;

    setIsGenerating(true);

    // 模拟图片生成过程
    setTimeout(() => {
      // 实际项目中，这里应该是调用API进行图片生成
      // 这里我们简单地使用原始图片作为"生成结果"
      setGeneratedImage(preview);
      setIsGenerating(false);
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setGeneratedImage(null);
    setIsGenerating(false);
  };

  // 清理预览URL
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <section
      id="upload"
      className="section-padding relative overflow-hidden bg-gray-50"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 bg-blue-50 rounded-full"
          >
            <span className="text-blue-600 font-medium flex items-center">
              <Sparkles size={18} className="mr-2" />
              AI 图像生成
            </span>
          </motion.div>
          <motion.h2
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            立即<span className="gradient-text">体验</span>图像魔方
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            上传您的图片，选择风格，一键生成专业级别的精美图像
          </motion.p>
        </div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm font-bold">
                    1
                  </div>
                  上传您的图片
                </h3>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-xl p-6 h-64 flex flex-col items-center justify-center cursor-pointer transition-all ${
                    isDragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-400 hover:bg-blue-50/50"
                  } ${preview ? "border-solid border-blue-500" : ""}`}
                >
                  <input {...getInputProps()} />

                  {preview ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={preview}
                        alt="预览图片"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReset();
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors shadow-md"
                        aria-label="删除图片"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                        <Plus size={28} className="text-blue-600" />
                      </div>
                      <p className="text-gray-700 text-center font-medium">
                        {isDragActive
                          ? "放开以上传图片"
                          : "点击或拖拽图片至此处上传"}
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        支持 JPG, PNG, WEBP 格式，最大 5MB
                      </p>
                    </>
                  )}
                </div>

                {preview && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm font-bold">
                        2
                      </div>
                      选择风格
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {styles.map((style) => (
                        <button
                          key={style.id}
                          className={`py-3 px-3 rounded-xl text-sm transition-all ${
                            selectedStyle === style.id
                              ? `bg-gradient-to-r ${style.color} text-white shadow-md`
                              : "bg-white border border-gray-200 hover:border-blue-300 text-gray-800 hover:shadow-sm"
                          }`}
                          onClick={() => setSelectedStyle(style.id)}
                        >
                          {selectedStyle === style.id && (
                            <Check size={16} className="inline-block mr-1" />
                          )}
                          {style.name}
                        </button>
                      ))}
                    </div>

                    <button
                      className="w-full mt-8 create-button"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          生成中...
                        </>
                      ) : (
                        <>
                          <Sparkles size={20} className="mr-2" />
                          生成图片
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm font-bold">
                    3
                  </div>
                  生成结果
                </h3>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 h-64 flex flex-col items-center justify-center bg-gray-50">
                  {generatedImage ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={generatedImage}
                        alt="生成的图片"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                      />
                      <div className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1.5 px-4 rounded-full text-xs shadow-md flex items-center">
                        <Sparkles size={14} className="mr-1.5" />
                        {styles.find((s) => s.id === selectedStyle)?.name ||
                          "卡通风格"}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 mx-auto">
                        <ImageIcon size={28} className="text-gray-400" />
                      </div>
                      <p className="text-gray-600 font-medium">
                        {isGenerating
                          ? "正在生成图片..."
                          : "生成的图片将显示在这里"}
                      </p>
                      {isGenerating && (
                        <div className="mt-4 flex justify-center">
                          <div className="w-full max-w-xs bg-blue-50 rounded-lg p-3 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <Loader2
                                size={18}
                                className="text-blue-600 animate-spin"
                              />
                            </div>
                            <div>
                              <div className="h-2 bg-blue-200 rounded-full w-24 mb-1"></div>
                              <div className="h-2 bg-blue-200 rounded-full w-16"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {generatedImage && (
                  <div className="mt-8 flex flex-col items-center">
                    <button className="w-full create-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          transform="rotate(180, 10, 10)"
                        />
                      </svg>
                      下载图片
                    </button>
                    <p className="text-sm text-gray-500 mt-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      免费用户每日可生成5张图片
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
