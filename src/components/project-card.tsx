import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

interface ProjectCardProps {
  img: string;
  coverImg: string;
  gallery?: string[];
  title: string;
  desc: string;
  fullDesc: string;
  links?: {
    git?: string;
    figma?: string;
    web?: string;
    stitch?: string;
  };
}

export function ProjectCard({
  img,
  coverImg,
  gallery,
  title,
  desc,
  fullDesc,
  links,
}: ProjectCardProps) {
  const [open, setOpen] = React.useState(false);
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);

  const images = gallery && gallery.length > 0 ? gallery : [coverImg];
  const externalLinks = [
    links?.git
      ? { label: "Open Git", href: links.git, icon: "/image/github-sign.png" }
      : null,
    links?.figma
      ? { label: "Open Figma", href: links.figma, icon: "/image/figma.png" }
      : null,
    links?.web ? { label: "Open Web", href: links.web } : null,
    links?.stitch
      ? {
          label: "Open Stitch",
          href: links.stitch,
          icon: "/image/Google-Stitch-Logo.png",
        }
      : null,
  ].filter(Boolean) as { label: string; href: string; icon?: string }[];

  const handleOpen = () => {
    setOpen(!open);
    setCurrentImgIndex(0);
  };
  const openExternalLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Card color="transparent" shadow={false}>
        <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-0">
          <Typography
            variant="h5"
            className="mb-2 text-blue-gray-900 transition-colors hover:text-gray-800"
          >
            {title}
          </Typography>
          <Typography className="mb-6 font-normal !text-gray-500">
            {desc}
          </Typography>
          <Button color="gray" size="sm" onClick={handleOpen}>
            see details
          </Button>
        </CardBody>
      </Card>

      <Dialog 
        open={open} 
        handler={handleOpen} 
        size="lg" 
        className="overflow-hidden"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex flex-col items-start gap-1">
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
        </DialogHeader>
        <DialogBody divider className="overflow-y-auto max-h-[70vh] p-0">
          <div className="w-full relative group bg-black/5 animate-in fade-in duration-700">
            <Image
              src={images[currentImgIndex]}
              alt={`${title} cover ${currentImgIndex + 1}`}
              width={1200}
              height={600}
              className="w-full h-auto max-h-[500px] object-contain transition-all duration-300"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-blue-gray-900" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRightIcon className="h-6 w-6 text-blue-gray-900" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full transition-all ${
                        i === currentImgIndex ? "bg-white w-4" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="p-6">
            <Typography className="font-normal text-gray-700 whitespace-pre-line leading-relaxed">
              {fullDesc}
            </Typography>
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {externalLinks.map(({ label, href, icon }) => (
              <Button
                key={label}
                onClick={() => openExternalLink(href)}
                size="sm"
                color="gray"
                className="flex items-center gap-2"
              >
                {icon ? (
                  <Image
                    src={icon}
                    alt={`${label} icon`}
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain"
                  />
                ) : null}
                {label}
              </Button>
            ))}
          </div>
          <Button color="red" variant="text" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default ProjectCard;
