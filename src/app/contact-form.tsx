"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50 max-w-2xl">
          <CardBody className="flex flex-col items-center p-5 md:p-10">
            <div className="w-full rounded-lg py-8 p-5 md:p-16 bg-gray-900 flex flex-col items-center">
              <Typography variant="h4" color="white" className="mb-6 text-center">
                Contact Information
              </Typography>

              <div className="flex flex-col gap-6 items-center">
                <div className="flex items-center gap-5">
                  <PhoneIcon className="h-6 w-6 text-white" />
                  <Typography variant="h6" color="white">
                    9642138134
                  </Typography>
                </div>
                <div className="flex items-center gap-5">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                  <Typography variant="h6" color="white">
                    ankithareddy0804@gmail.com
                  </Typography>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-10">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-2xl" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-2xl" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-2xl" />
                </IconButton>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
