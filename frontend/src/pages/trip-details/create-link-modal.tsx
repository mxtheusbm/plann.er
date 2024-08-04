import { Link, Tag } from "lucide-react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

interface CreateLinkModalProps {
  closeCreateLinkModal: () => void;
}

export function CreateLinkModal({
  closeCreateLinkModal,
}: CreateLinkModalProps) {
  // const { tripId } = useParams();

  return (
    <Modal
      title="Cadastrar Link"
      subtitle="Adicione um link importante relacionado a viagem"
      onClose={closeCreateLinkModal}
    >
      <form className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="text-zinc-400 size-5" />
          <input
            name="title"
            placeholder="Dê um nome para o link"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Link className="text-zinc-400 size-5" />
          <input
            name="url"
            placeholder="Qual a url do link?"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <Button size="full">Salvar link</Button>
      </form>
    </Modal>
  );
}
