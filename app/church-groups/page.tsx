"use client";

import React, { useState } from "react";
import { GroupCard } from "@/components/GroupCard";
import { Group } from "@/components/Types";
import { InterestFormModal } from "@/components/InterestFormModal";
import { sampleGroups } from "@/components/sampleGroups";

const ChurchGroupsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const handleInterestClick = (group: Group) => {
    setSelectedGroup(group);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGroup(null);
  };

  const handleFormSubmit = (formData: { name: string; email: string }) => {
    // In a real application, you would send this data to a server or API.
    console.log("Interest form submitted for:", selectedGroup?.name, formData);
    handleCloseModal();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Find Your Community
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Life is better together. Our groups are the heart of our church,
          providing a place for you to connect, grow, and serve. Explore the
          groups below and find where you belong.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleGroups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onInterestClick={handleInterestClick}
            />
          ))}
        </div>
      </div>
      {selectedGroup && (
        <InterestFormModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          groupName={selectedGroup.name}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default ChurchGroupsPage;
