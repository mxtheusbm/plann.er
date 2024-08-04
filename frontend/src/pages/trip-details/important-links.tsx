import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { CreateLinkModal } from "./create-link-modal";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface Link {
  title: string;
  url: string;
}

export function ImportantLinks() {
  const { tripId } = useParams();

  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    api
      .get(`trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      {links.map((link) => (
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {link.title}
              </span>
              <a
                href="#"
                className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
              >
                {link.url}
              </a>
            </div>

            <Link2 className="text-zinc-400 size-5 shrink-0" />
          </div>
        </div>
      ))}

      <Button
        variant="secondary"
        size="full"
        onClick={() => setIsCreateLinkModalOpen(true)}
      >
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>

      {isCreateLinkModalOpen && (
        <CreateLinkModal
          closeCreateLinkModal={() => setIsCreateLinkModalOpen(false)}
        />
      )}
    </div>
  );
}
