"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, ChipProps } from "@nextui-org/react";
import { IconCircleMinus, IconPlus, IconTrash, IconEdit } from "@tabler/icons-react";
import { ADMIN_API_ROUTES, PUBLIC_API_ROUTES } from "@/utils";
import axios from "axios";
import Loading from '@/components/Loading';


interface Post {
  id: string;
  title: string;
  content?: string;
  imgUrls: string[];
  url: string;
  published: boolean;
  authorId?: string;
  createdAt: Date;
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  true: "success",
  false: "danger",
};

export default function Dashboard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [mediaInputsCreate, setMediaInputsCreate] = useState<JSX.Element[]>([]);
  const [mediaInputsEdit, setMediaInputsEdit] = useState<JSX.Element[]>([]);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loader, setLoader] = useState(true);
  const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onOpenChange: onEditModalOpenChange } = useDisclosure();
  const [editedPost, setEditedPost] = useState<Post>({
    id: "",
    title: "",
    content: "",
    imgUrls: [],
    url: "",
    published: false,
    createdAt: new Date(),
  });
  const [createdPost, setCreatedPost] = useState<Post>({
    id: "",
    title: "",
    content: "",
    imgUrls: [],
    url: "",
    published: false,
    createdAt: new Date(),
  });

const columns = [
    { name: "Titre", uid: "title" },
    { name: "Contenu", uid: "content" },
    { name: "Lien", uid: "url" },
    { name: "Médias", uid: "imgUrls" },
    { name: "Actions", uid: "actions" },
  ]

  useEffect(() => {
    axios.get(PUBLIC_API_ROUTES.GET_POSTS)
      .then(response => {
        setPosts(response.data);
        console.log("Posts fetched:", response.data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }, []);

    useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);


  const handleCreatePost = () => {
        axios.post(ADMIN_API_ROUTES.CREATE_POST, createdPost)
            .then(response => {
                console.log('New post created:', response.data);
                // Réinitialiser les champs du formulaire après la création du post
                setCreatedPost({
                    id: "",
                    title: "",
                    content: "",
                    imgUrls: [],
                    url: "",
                    published: false,
                    createdAt: new Date(),
                });
                onOpenChange(); 
                window.location.reload();
            })
            .catch(error => {
                console.error('Error creating post:', error);
            });
    };

  const handleEditPost = (post: Post) => {
    axios.put(`${ADMIN_API_ROUTES.UPDATE_POST}?id=${post.id}`, post)
      .then(response => {
        console.log("Post updated:", response.data);
        onEditModalOpenChange();
        window.location.reload();
      })
      .catch(error => {
        console.error("Error updating post:", error);
      });
  };

  const handleEditClick = (id: string) => {
  const postToEdit = posts.find(post => post.id === id);
  if (postToEdit) {
    setEditedPost(postToEdit);
    onEditModalOpen();
  }
};

  const handleDeletePost = (id: string) => {
    axios.delete(`${ADMIN_API_ROUTES.DELETE_POST}?id=${id}`)
      .then(() => {
        // Mise à jour des posts après la suppression
        setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
      })
      .catch(error => {
        console.error("Error deleting post:", error);
      });
  };

  const handleAddInputCreate = () => {
    const newInput = (
      <div className="flex items-center gap-2" key={mediaInputsCreate.length}>
        <Input
          autoFocus
          label={`Média ${mediaInputsCreate.length + 1}`}
          placeholder="Entrer le média"
          variant="bordered"
          onChange={(e) => setCreatedPost({ ...createdPost, imgUrls: [...createdPost.imgUrls, e.target.value] })} // Ajouter la logique pour ajouter les médias
        />
        <Button
          isIconOnly
          color="danger"
          onPress={() => handleRemoveInputCreate(mediaInputsCreate.length)}
        >
          <IconCircleMinus />
        </Button>
      </div>
    );
    setMediaInputsCreate((prevInputs) => [...prevInputs, newInput]);
  };

  const handleAddInputEdit = () => {
    const newInput = (
      <div className="flex items-center gap-2" key={mediaInputsEdit.length}>
        <Input
          autoFocus
          label={`Média ${mediaInputsEdit.length + 1}`}
          placeholder="Entrer le média"
          variant="bordered"
          onChange={(e) => setEditedPost({ ...editedPost, imgUrls: [...editedPost.imgUrls, e.target.value] })} // Ajouter la logique pour ajouter les médias
        
        />
        <Button
          isIconOnly
          color="danger"
          onPress={() => handleRemoveInputEdit(mediaInputsEdit.length)}
        >
          <IconCircleMinus />
        </Button>
      </div>
    );
    setMediaInputsEdit((prevInputs) => [...prevInputs, newInput]);
  };

  const handleRemoveInputEdit = (index: number) => {
    setMediaInputsEdit((prevInputsEdit) => {
      const newInputsEdit = [...prevInputsEdit];
      newInputsEdit.splice(index, 1);
      return newInputsEdit;
    });
  };

  const handleRemoveInputCreate = (index: number) => {
    setMediaInputsCreate((prevInputsCreate) => {
      const newInputsCreate = [...prevInputsCreate];
      newInputsCreate.splice(index, 1);
      return newInputsCreate;
    });
  };
  
  const renderCell = useCallback((post: Post, column: string) => {
    switch (column) {
      case "title":
        return post.title;
      case "content":
        return post.content;
      case "url":
        return <Link href={post.url}>Lien du post</Link>;
      case "imgUrls":
        return (
    <div className="flex gap-2">
      {post.imgUrls.map((imgUrl, index) => (
        <img key={index} src={imgUrl} alt="media" className="w-20 h-20" />
      ))}
    </div>
  );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Modifier">
              <span className="text-lg text-default-400 cursor-pointer hover:text-sky-600 active:opacity-50" onClick={() => handleEditClick(post.id)}>
                <IconEdit />
              </span>
            </Tooltip>
            <Tooltip content="Supprimer">
              <span className="text-lg text-default-400 cursor-pointer hover:text-red-500 active:opacity-50" onClick={() => handleDeletePost(post.id)}>
                <IconTrash />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return null;
    }
  }, [posts, handleEditClick]);

  return loader ? ( 
    <Loading />
  ) : (
    <div className="w-full h-full bg-white flex flex-col gap-5">
      <h1 className="text-3xl font-bold py-5 text-sky-900 text-center">Dashboard</h1>
      <div className="flex justify-end px-5">
        <Button onPress={onOpen} color="primary" startContent={<IconPlus />}>
          Créer un post
        </Button>
      </div>
      <div className="w-full px-5">
        <Table aria-label="Tableau Dashboard">
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.uid} style={{ width: column.uid === "content" ? "450px" : "auto" }}>{column.name}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                {columns.map((column) => (
                  <TableCell key={column.uid}>
                    {renderCell(post, column.uid)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table> 
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Créer un nouveau post
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                label="Titre du poste"
                                placeholder="Intitulé du poste"
                                variant="bordered"
                                value={createdPost.title}
                                onChange={(e) => setCreatedPost({ ...createdPost, title: e.target.value })}
                            />
                            <Textarea
                                autoFocus
                                label="Contenu du poste"
                                placeholder="Entrer votre contenu"
                                variant="bordered"
                                value={createdPost.content}
                                onChange={(e) => setCreatedPost({ ...createdPost, content: e.target.value })}
                            />
                            <Input
                                autoFocus
                                label="Lien du poste"
                                placeholder="Entrer le lien du poste"
                                variant="bordered"
                                value={createdPost.url}
                                onChange={(e) => setCreatedPost({ ...createdPost, url: e.target.value })}
                            />
                            {mediaInputsCreate}
                        <Button color="secondary" onPress={handleAddInputCreate}>
                          Ajouter un input pour les médias
                        </Button>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Annuler
                            </Button>
                            <Button color="primary" onPress={handleCreatePost}>
                                Publier
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
      </Modal>
      <Modal isOpen={isEditModalOpen} onOpenChange={onEditModalOpenChange} placement="top-center">
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">
          Modifier le post
        </ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            label="Titre du poste"
            placeholder="Intitulé du poste"
            variant="bordered"
            value={editedPost.title}
            onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
          />
          <Textarea
            autoFocus
            label="Contenu du poste"
            placeholder="Entrer votre contenu"
            variant="bordered"
            value={editedPost.content}
            onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
          />
          <Input
            autoFocus
            label="Lien du poste"
            placeholder="Entrer le lien du poste"
            variant="bordered"
            value={editedPost.url}
            onChange={(e) => setEditedPost({ ...editedPost, url: e.target.value })}
          />
          
          {mediaInputsEdit}
          <Button color="secondary" onPress={handleAddInputEdit}>
            Ajouter un input pour les médias
          </Button>
        </ModalBody>
        <Button color="primary" onPress={() => handleEditPost(editedPost)}>
          Enregistrer
        </Button>
      </>
    )}
  </ModalContent>
      </Modal>
    </div>
  );
}
